import { isWx } from '@/utils/env';
import request from '@/utils/request';
import Banner from '@/components/Banner';
import { useEffect, useState, useRef } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { navigateTo, useReachBottom } from '@tarojs/taro';
import InfiniteScrollHolder from '@/components/InfiniteScrollHolder';
import bannerImg from './assets/b.png';
import './index.less';

function toCourseDetailPage(courseId) {
    navigateTo({
        url: `/pages/courseDetail/index?id=${courseId}`,
    });
}
export default function Home() {
    const compRef= useRef(null);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(true);
    const [pageTotal, setPageTotal] = useState(0);
    const [bannerUrls, setBannerUrls] = useState(null);
    const [courseList, setCourseList] = useState(null);
    const [courseTypeList, setCourseTypeList] = useState([]);

    useEffect(() => {
        fetchCourseTypeList();
        fetchBanner();
    }, []);
    
    useReachBottom(onLoadMore);

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
                setBannerUrls(data.list);
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
        <View className="home bg-gray" ref={compRef}>
            <View className="container full-height">
                <Banner bannerUrls={bannerUrls} />
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
                                        src={typeThumb}
                                    />
                                    <View className="font-size-12 m-t-5">{typeName}</View>
                                </View>
                            );
                        })
                    }
                </View>
                <Image
                    src={bannerImg}
                    mode="widthFix"
                    className="banner m-b-15"
                    onClick={() => {
                        if (isWx) {
                            if (courseList?.length > 0) {
                                toCourseDetailPage(courseList[0].courseId);
                            }
                            return;
                        }
                        location.href = 'https://jinshuju.net/f/zxwpBB';
                    }}
                />
                <View className="font-size-14 m-b-10">
                    <Text className="m-l-10 font-bold">全部</Text>
                </View>
                <View className="course-box">
                    <View className="course-list">
                        {/* {
                            !isWx && (
                                <View
                                    key={courseId}
                                    onClick={() => {
                                        location.href = 'https://jinshuju.net/f/zxwpBB';
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
                                    <View className="title font-size-14 m-t-5">人工智能社团登记表</View>
                                </View>
                            )
                        } */}
                        {
                            courseList?.map(({ courseId, courseThumb, courseTitle }) => {
                                return (
                                    <View
                                        key={courseId}
                                        onClick={() => {
                                            toCourseDetailPage(courseId);
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
                        <InfiniteScrollHolder
                            className="infinite-load" 
                            hasMore={hasMore()}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
