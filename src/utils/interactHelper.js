import Taro from "@tarojs/taro";

export function showErrorMsg(msg, duration = 3000) {
    if (msg) {
        Taro.showToast({
            title: msg,
            duration,
            icon: msg?.length > 7 ? 'none' : 'error',
        });
    }
}
export function showSuccessMsg(msg, success = () => {}) {
    Taro.showToast({
        title: msg,
        duration: 3000,
        icon: 'success',
        success,
    });
}
export function showLoading(msg = '加载中') {
    Taro.showLoading({
        title: msg,
    });
}
export function hideLoading() {
    Taro.hideLoading();
}