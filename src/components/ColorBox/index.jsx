import { View, Text } from '@tarojs/components';
import './index.less';

function ColorBox({ children }) {
    return (
        <View className="color-box pos-relative">
            <Text className="shape brown" />
            <Text className="shape yellow" />
            {children}
        </View>
    );
}

export default ColorBox;
