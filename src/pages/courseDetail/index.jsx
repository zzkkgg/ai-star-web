import Taro from '@tarojs/taro';
import request from '@/utils/request';
import { useEffect, useState } from 'react';
import { getRouterParams } from '@/utils/routeHelper';
import { View, RichText, Image } from '@tarojs/components';
import './index.less';

function CourseDetail() {
    const [detail, setDetail] = useState(null);
    
    useEffect(() => {
        const { id } = getRouterParams();
        request.get({
            url: '/api/course/detail',
            data: {
                courseId: id,
            },
        }).then(({ data }) => {
            setDetail(data);
            Taro.setNavigationBarTitle({ title: data.courseTitle });
        });
    }, []);

    if (!detail) {
        return null;
    }

    return (
        <View className="container course-detail">
            {
                detail.courseThumb && (
                    <Image
                        src={detail.courseThumb}
                        mode="widthFix"
                        className="thumb m-b-10"
                    />
                )
            }
            <View className="title font-size-16 font-bold m-b-10 align-center">{detail.courseTitle}</View>
            <View className="rich-text m-t-10 m-b-10">
                <RichText nodes={detail.courseContent} />
            </View>
        </View>
    );
}

export default CourseDetail;
