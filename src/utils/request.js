
import Taro from '@tarojs/taro';
import env from './env';
import { getStorage } from './storageHelper';
import { showErrorMsg, showLoading, hideLoading } from './interactHelper'; 

const SLASH = '/';
const slashRE = /([^:]\/\/)/g;
const { commonUrl } = env;

function clearMultSlash(str) {
    let result = str;
    try {
        result = str.replace(slashRE, SLASH); // 去除拼接字符串时产生的多余斜线【/】
    } finally {
        return result;
    }
}

function normalizeUrl(url) {
    const fullUrl = `${commonUrl}${url.startsWith(SLASH) ? url : `${SLASH}${url}`}`;
    return clearMultSlash(fullUrl);
}

function isResponseOk(code) {
    return String(code) === '200';
}

function defaultCatchHandler(err) {
    showErrorMsg(err?.message || '请求异常');
}

function httpRequest(options = {}, method = 'GET') {
    const { url, data } = options;
    const requestOptions = {
        data,
        method,
        header: {},
        timeout: 10000,
        url: normalizeUrl(url),
    }
    const openid = getStorage('openid');
    if (openid) {
        requestOptions.header.openid = openid;
    }
    const appid = getStorage('appid');
    if (appid) {
        requestOptions.header.appid = appid;
    }
    const token = getStorage('accessToken');
    if (token) {
        requestOptions.header.authorization = `Bearer ${token}`;
    }
    requestOptions.header['Content-Type'] = 'application/json';
    return Taro.request(requestOptions);
}

const loadingDelay = 500; // 500ms内接口返回数据则不展示加载框

function handleReject(reject, msg) {
    reject(msg);
}

function handleException(statusCode, message, rawOptions, method, _request, resolve, reject) {
    if (statusCode === 400) {
        if (!rawOptions.hideError) {
            showErrorMsg(message);
        }
        handleReject(reject, message);
        return;
    }
    if (statusCode === 401) { // 接口授权失败，没有登录或者token过期
        handleReject(reject, '未登录');
        return;
    }
    if (!rawOptions.hideError) {
        showErrorMsg('请求异常');
    }
    handleReject(reject, '请求异常');
}

function partialRequest(method = 'GET') {
    function _request(rawOptions) {
        let timer = null;
        let startTime;
        return new Promise((resolve, reject) => {
            const { showLoadModal = true, ...options } = rawOptions;
            if (showLoadModal) {
                timer = setTimeout(() => {
                    showLoading(showLoadModal?.title || '加载中');
                }, loadingDelay);
                startTime = Date.now();
            }
            httpRequest(options, method).then((res) => {
                const { data, statusCode } = res;
                const { message } = data || {};
                if (statusCode === 200) {
                    if (isResponseOk(data?.code)) {
                        resolve(data);
                        return;
                    }
                    showErrorMsg(message);
                    reject(message);
                }
                console.log('statusCode error', res);
                handleException(statusCode, message || data.title, rawOptions, method, _request, resolve, reject);
            })
            .catch((err) => {
                console.log('request err', err);
                reject(err);
            })
            .finally(() => {
                if (timer) {
                    if (Date.now() - startTime <= loadingDelay) {  // 接口在loadingDelay时间内完成请求，则取消显示loading
                        clearTimeout(timer);
                        timer = null;
                    } else {
                        setTimeout(hideLoading, loadingDelay);
                    }
                }
            });
        });
    }
    return _request;
}

const _get = partialRequest();

const _post = partialRequest('POST');

const _put = partialRequest('PUT');

const _delete = partialRequest('DELETE');

const request = {
    get: _get,
    put: _put,
    post: _post,
    delete: _delete,
};

export default request;

export {
    isResponseOk,
    normalizeUrl,
    defaultCatchHandler,
}