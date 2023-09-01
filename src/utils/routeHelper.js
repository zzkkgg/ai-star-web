
import Taro from '@tarojs/taro';
import { isWx } from './env';
import { clearUserCache, getStorage, setStorage } from './storageHelper';

function getUrl(route, params) {
    let queryArr = []
    Object.entries(params).forEach(([key, value]) => {
        queryArr.push(`${key}=${value}`)
    });
    const url = queryArr.length
        ? `/pages/${route}/index?${queryArr.join('&')}`
        : `/pages/${route}/index`;
    return url
}

function appendInviterId(params, rawUrl) {
    if (params.inviterId) {
        rawUrl = `${rawUrl}?inviterId=${params.inviterId}`;
    }
    const { path, params: routeParams } = Taro.getCurrentInstance().router;
    if (path === '/pages/packageShare/index') {
        setStorage('redirectPath', `/pages/packageShare/index?packageId=${routeParams.packageId}`);
    }

    return rawUrl;
}
export function concatRedirectUrl(navigateToUrl) {
    if (!location.href.includes('redirectUrl')) {
        const urlSearch = location.search;
        let redirectUrl = location.hash.slice(1);
        if (urlSearch) {
            const filterSearch = urlSearch.slice(1).split('&').filter((s) => {
                return !s.match(/(state|code)=/);
            }).join('&');
            if (redirectUrl && filterSearch) {
                redirectUrl += `?${filterSearch}`;
            }
        }
        if (redirectUrl && !redirectUrl.includes('/login/index')) {
            return `${navigateToUrl}?redirectUrl=${encodeURIComponent(redirectUrl)}`;
        }
    } else {
        const [_, search] = location.href.split('redirectUrl');
        return `${navigateToUrl}?redirectUrl${search}`;
    }
    return navigateToUrl;
}
export function redirectToLogin() {
    const params = getRouterParams();
    clearUserCache();
    if (isWx) { // 微信小程序
        let url = '/pages/login/index';
        Taro.reLaunch({
            url: appendInviterId(params, url),
        });
    } else {
        let newUrl = `${location.origin}/#/pages${location.href.includes('maternalAndEducation') ? '/maternalAndEducation' : ''}/login/index`;
        location.href = concatRedirectUrl(newUrl);
    }
}
// 不可返回，非 tabBar 页面跳转
export function redirectTo(route, params = {}) {
    const url = getUrl(route, params)
    Taro.redirectTo({
        url
    });
}

// 跳转到 tabBar 页面
export function switchTab(route, params = {}) {
    const url = getUrl(route, params)
    Taro.switchTab({
        url
    });
}

// 可返回跳转
export function navigateTo(route, params = {}, events) {
    const url = getUrl(route, params)
    Taro.navigateTo({
        url,
        events,
    });
}
// 跳转返回跳转 delta <= 10
export function navigateBack(delta = 1) {
    Taro.navigateBack({
        delta
    })
}

export function getRouterParams() {
    return Taro.getCurrentInstance().router.params;
}

export function requireLoginRedirectTo(option, isRedirectTo = false) {
    const accessToken = getStorage('accessToken');
    if (!accessToken) {
        const params = getRouterParams();
        let url = '/pages/login/index';
        if (params.inviterId) {
            url = `${url}?inviterId=${params.inviterId}`;
        }
        Taro.redirectTo({
            url,
        });
    } else {
        if (isRedirectTo) {
            Taro.redirectTo(option);
        } else {
            Taro.navigateTo(option);
        }
    }
}