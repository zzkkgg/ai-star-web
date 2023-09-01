import Taro from '@tarojs/taro';
import request from '@/utils/request';
import { useEffect, useState } from 'react';
import { getRouterParams } from '@/utils/routeHelper';
import { View, RichText, Image } from '@tarojs/components';
import './index.less';

function ActivityDetail() {
    const [detail, setDetail] = useState(null);
    
    useEffect(() => {
        const { id } = getRouterParams();
        request.get({
            url: '/api/activity/detail',
            data: {
                activityId: id,
            },
        }).then(({ data }) => {
            setDetail(data);
            Taro.setNavigationBarTitle({ title: data.activityTitle });
        });
    }, []);

    if (!detail) {
        return null;
    }

    return (
        <View className="activity-detail container">
            {
                detail.activityThumb && (
                    <Image
                        src={detail.activityThumb}
                        mode="widthFix"
                        className="thumb m-b-10"
                    />
                )
            }
            <View className="title font-size-16 font-bold m-b-10 align-center">{detail.activityTitle}</View>
            <View className="publish-time font-size-12 m-b-10 align-center color-gray">
                {detail.activityAuthor} {detail.activityBefrom} {detail.activityTime}
            </View>
            <View className="rich-text m-t-10 m-b-10">
                <RichText nodes={detail.activityContent} />
            </View>
        </View>
    );
}

export default ActivityDetail;
