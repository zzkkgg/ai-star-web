import { View, Image } from '@tarojs/components';
import './index.less';

function EntityCard({ data, onClick = Function.prototype }) {
    return (
        <View
            onClick={onClick}
            className="entity-card font-size-14"
        >
            <Image
                mode="widthFix"
                style={{ width: '50%' }}
                src={data.activityThumb || data.gameThumb || data.courseThumb}
            />
            <View className="flex-1 content">
                <View className="inner">
                    {data.activityTitle || data.gameTitle || data.courseTitle}
                </View>
            </View>
        </View>
    );
}

export default EntityCard;
