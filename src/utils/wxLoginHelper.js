import request from '@/utils/request';
import parseParams from '@/utils/h5/urlParse';
import isResponseOk from '@/utils/h5/httpHelper';
import { showErrorMsg } from '@/utils/interactHelper';
import afterSuccessLogin, { isLogin } from '@/utils/h5/funcHelper';
import saveToLocal, { getFromLocal } from '@/utils/h5/persistenceHelper';

function cachePartnerIdToSession() {
    const partnerId = parsePartnerIdFromUrl();
    if (partnerId) {
        sessionStorage.setItem('partnerId', partnerId);
    }
}

function TriggerException(message) {
    throw Error(message);
}

function parsePartnerIdFromUrl() {
    return parseParams(location.href, 'partnerId') || '';
}

function stripAuthSearch(redirectUrl) {
    return redirectUrl.replace(/\?code=\w+|&state=state/gi, '');
}

function toWxAuth(appId, redirectUrl = location.href) {
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(stripAuthSearch(redirectUrl))}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
}

async function wxWebLogin(successCallback, errorCallback) {
    try {
        const currentUrl = location.href;
        const shareId = parseParams(currentUrl, 'mallShareId') || localStorage.getItem('shareId');
        shareId && saveToLocal('shareFormUserId',  shareId);
        cachePartnerIdToSession();
        const wxCode = parseParams(currentUrl, 'code');
        
        if (!getFromLocal('openid')) { // 没有获取到用户的openid，没有登陆过
            let redirectUrl = currentUrl.replace(/\?inviterId=\w+/, '');
            const response = await request.get({
                vipApi: true,
                url: '/api/Weixins/GetConfigPackage',
                data: {
                    url: location.href.split('#')[0],
                }
            });
            const { code, data } = response;
            if (isResponseOk(code)) {
                const { appId } = data;
                saveToLocal('appid', appId);
                window.appId = appId;
            }
            // 没有code，则跳转微信授权页面
            if (!wxCode) {
                toWxAuth(window.appId, redirectUrl);
                return;
            }
            if (wxCode === getFromLocal('code')) {
                redirectUrl = stripAuthSearch(redirectUrl); // code已经被使用过，需要重新获取
                toWxAuth(window.appId, redirectUrl);
                return;
            }
            saveToLocal('code', wxCode);

            const inviterId = getFromLocal('shareFormUserId');
            const loginPayload = {
                code: wxCode,
                thirdPlatform: 0, // 微信H5
            };
            const user = getFromLocal('user');
            if (user) {
                const userObj = JSON.parse(user);
                if (userObj?.avatar) {
                    loginPayload.avatar = userObj.avatar;
                }
                if (userObj?.nickname) {
                    loginPayload.nickname = userObj.nickname;
                }
            }
            if (inviterId) {
                loginPayload.inviterId = inviterId;
            }
            const loginResponse = await request.post({
                url: '/api/Users/LoginByMp',
                data: loginPayload,
                vipApi: true,
                hideError: true,
                showLoadModal: false,
            });
            if (isResponseOk(loginResponse.code)) {
                localStorage.removeItem('shareId');
                localStorage.removeItem('shareFormUserId');
                const { token, openId, nickname, avatar, unionid } = loginResponse.data;
                if (token == null) {
                    openId && saveToLocal('openid', openId);
                    unionid && saveToLocal('unionid', unionid);
                    saveToLocal('user', JSON.stringify({
                        avatar,
                        nickname,
                    }));
                } else {
                    afterSuccessLogin(loginResponse.data);
                }
                successCallback(loginResponse.data);
                return;
            }
            TriggerException(loginResponse.message);
            return;
        } else if (isLogin()) {
            successCallback();
            return;
        }
        TriggerException('error');
    } catch (error) {
        console.error(error);
        let errorMsg = error.message;
        const { message } = error?.response?.data || {};
        message && (errorMsg = message);
        showErrorMsg(errorMsg);
        errorCallback && errorCallback(error);
    }
}

export default wxWebLogin;