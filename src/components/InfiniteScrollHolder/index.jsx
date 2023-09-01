import { View } from '@tarojs/components';
import './index.less';

function InfiniteScrollHolder({ hasMore, className }) {
    return (
        <View className={`align-center color-gray font-size-12 infinite-scroll-holder${className ? ` ${className}` : ''}`}>
            {
                hasMore ? '加载中...' : '没有更多了'
            }
        </View>
    );
}

export default InfiniteScrollHolder;
