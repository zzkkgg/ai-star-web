import Taro from '@tarojs/taro';
import { isH5 } from '@/utils/env';

function setStorage(key, data) {
    let _value = data;
    if (isH5) {
        if (typeof data === 'object') {
            _value = JSON.stringify(data);
        }
        localStorage.setItem(key, _value);
        return;
    }
    Taro.setStorageSync(key, _value);
}
function batchSetStorage(data = {}) {
    Object.entries(data).forEach(([key, value]) => {
        setStorage(key, value);
    });
}
function getStorage(key) {
    const value = isH5 ? localStorage.getItem(key): Taro.getStorageSync(key);
    if (typeof value === 'string' && value?.match(/^\{[\s\S]+}$/)) {
        return JSON.parse(value);
    }
    return value;
}
function removeStorage(key) {
    if (isH5) {
        localStorage.removeItem(key);
        return;
    }
    return Taro.removeStorageSync(key);
}

function clearUserCache() {
    ['user', 'personalAssets', 'appid', 'unionid', 'code', 'mpOpenId', 'accessToken', 'expiresAt', 'refreshToken', 'openid',
    'userId', 'initialAccount', 'personalAssets', 'isAuthenticated', 'inviterId'].forEach((k) => {
        removeStorage(k);
    });
}
export {
    setStorage,
    getStorage,
    removeStorage,
    clearUserCache,
    batchSetStorage,
};

export default getStorage;