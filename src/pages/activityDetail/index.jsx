import Taro from '@tarojs/taro';
import request from '@/utils/request';
import { useEffect, useState } from 'react';
import { View, RichText, Text } from '@tarojs/components';
import { getRouterParams } from '@/utils/routeHelper';
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
            <View className="title font-size-20 font-bold m-b-10">{detail.activityTitle}</View>
            <View className="publish-time font-size-14 m-b-10 color-gray">
                <Text style={{ color: 'rgb(87, 107, 149)' }}>{detail.activityAuthor}</Text> {detail.activityTime}
            </View>
            <View className="rich-text m-t-10 m-b-10">
                <RichText nodes={detail.activityContent} />
            </View>
        </View>
    );
}

export default ActivityDetail;
