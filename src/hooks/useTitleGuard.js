import { useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';

function useTitleGuard(pageConfig) {
    function internal() {
        pageConfig?.navigationBarTitleText && Taro.setNavigationBarTitle({
            title: pageConfig.navigationBarTitleText
        });
    }
    useEffect(internal, []);
    useDidShow(internal);
    return null;
}

export default useTitleGuard;