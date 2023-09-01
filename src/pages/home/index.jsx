import request from '@/utils/request';
import { navigateTo } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView } from '@tarojs/components';
import InfiniteScrollHolder from '@/components/InfiniteScrollHolder';
import aiImg from '@/assets/images/icons/ai.png';
import './index.less';

export default function Home() {
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(true);
    const [pageTotal, setPageTotal] = useState(0);
    const [bannerUrl, setBannerUrl] = useState('');
    const [courseList, setCourseList] = useState(null);
    const [courseTypeList, setCourseTypeList] = useState([]);

    useEffect(() => {
        fetchCourseTypeList();
        fetchCourseList();
        fetchBanner();
    }, []);
    function fetchBanner() {
        request.get({
            url: '/api/banner/list',
            data: {
                bannerType: 0,
                page: 1,
                size: 5,
            },
        }).then(({ data }) => {
            if (Array.isArray(data?.list)) {
                setBannerUrl(data.list[0].bannerImage);
            }
        });
    }
    function fetchCourseTypeList() {
        request.get({
            url: '/api/course/typeList',
            data: {
                page: 1,
                size: 5,
            },
        }).then(({ data }) => {
            setCourseTypeList(data?.list);
        });
    }
    function fetchCourseList() {
        setLoading(true);
        request.get({
            url: '/api/course/list',
            data: {
                page: current,
                size: 10,
            },
        }).then(({ data }) => {
            setPageTotal(data.pages);
            setCourseList((courseList || []).concat(data.list || []));
        }).finally(() => {
            setLoading(false);
        });
    }
    useEffect(fetchCourseList, [current]);

    function hasMore() {
        if (courseList == null || current < pageTotal) {
            return true;
        }
        return false;
    }

    function onLoadMore() {
        if (!hasMore() || loading) {
            return;
        }
        setCurrent(current + 1);
    }

    return (
        <View className="home bg-gray">
            <View className="container full-height">
                {
                    bannerUrl && (
                        <Image
                            src={bannerUrl}
                            className="banner"
                            mode="heightFix"
                        />
                    )
                }
                <View className="hot-course-list font-size-14">
                    {
                        courseTypeList?.map(({ typeId, typeName, typeThumb }) => {
                            return (
                                <View
                                    key={typeId}
                                    className="hot-course-item align-center"
                                    onClick={() => {
                                        navigateTo({
                                            url: `/pages/courseGroup/index?typeId=${typeId}`,
                                        });
                                    }}
                                >
                                    <Image
                                        mode="widthFix"
                                        className="course-icon"
                                        src={typeThumb || aiImg}
                                    />
                                    <View className="font-size-12 m-t-5">{typeName}</View>
                                </View>
                            );
                        })
                    }
                </View>
                <View className="banner-holder m-b-20" />
                <View className="font-size-14 m-b-10">
                    <Text className="m-l-10">全部</Text>
                </View>
                <View className="course-box">
                    <ScrollView
                        scrollY
                        onScrollToLower={onLoadMore}
                    >
                        <View className="course-list">
                            {
                                courseList?.map(({ courseId, courseThumb, courseTitle }) => {
                                    return (
                                        <View
                                            key={courseId}
                                            onClick={() => {
                                                navigateTo({
                                                    url: `/pages/courseDetail/index?id=${courseId}`,
                                                });
                                            }}
                                            className="course-card align-center"
                                        >
                                            <View className="thumbnail-box">
                                                <Image
                                                    src={courseThumb}
                                                    mode="widthFix"
                                                    className="image"
                                                />
                                            </View>
                                            <View className="title font-size-14 m-t-5">{courseTitle}</View>
                                        </View>
                                    );
                                })
                            }
                            <InfiniteScrollHolder className="infinite-load"  hasMore={hasMore()} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
