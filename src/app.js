import Taro from '@tarojs/taro';
import { Component } from 'react';
import initReactFastclick from 'react-fastclick';
import { isWx } from './utils/env';
import './app.less';

if (!isWx) {
    initReactFastclick();
}   

class App extends Component {
    componentDidShow() {
        if (isWx) {
            const updateManager = Taro.getUpdateManager();
            updateManager.onCheckForUpdate();
            updateManager.onUpdateReady(function () {
                Taro.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success(res) {
                        if (res.confirm) {
                            updateManager.applyUpdate();
                        }
                    }
                })
            });
            updateManager.onUpdateFailed(function () {
                Taro.showToast({
                    title: '新版本下载失败',
                    icon: 'none',
                });
            });
        }
    }
    componentDidHide() { }

    componentDidCatchError(err) {
        console.log('err', err);
    }
    render() {
        return this.props.children;
    }
}

export default App;
