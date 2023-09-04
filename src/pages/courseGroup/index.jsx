import request from '@/utils/request';
import { navigateTo } from '@tarojs/taro';
import { useState, useEffect } from 'react';
import EntityCard from '@/components/EntityCard';
import { getRouterParams } from '@/utils/routeHelper';
import { View, ScrollView, Image, Text } from '@tarojs/components';
import InfiniteScrollHolder from '@/components/InfiniteScrollHolder';
import './index.less';

function CourseGroup() {
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(false);
    const [timeStamp, setTimeStamp] = useState('');
    const [pageTotal, setPageTotal] = useState(0);
    const [courseList, setCourseList] = useState(null);
    const [activeGroupId, setActiveGroupId] = useState('');
    const [courseTypeList, setCourseTypeList] = useState([]);

    function updateTimeStamp() {
        setTimeStamp(Date.now());
    }

    function fetchCourseTypeList() {
        request.get({
            url: '/api/course/typeList',
            data: {
                page: 1,
                size: 40,
            },
        }).then(({ data }) => {
            setCourseTypeList(data?.list);
        });
    }
    
    useEffect(() => {
        const { typeId } = getRouterParams();
        setActiveGroupId(typeId);
        fetchCourseTypeList();
        updateTimeStamp();
    }, []);

    function fetchCourseList() {
        request.get({
            url: '/api/course/list',
            data: {
                page: current,
                size: 10,
                typeId: activeGroupId,
            },
        }).then(({ data }) => {
            setPageTotal(data?.pages);
            setCourseList(data?.list);
        });
    }
    useEffect(() => {
        if (timeStamp) {
            fetchCourseList();
        }
    }, [timeStamp]);
    
    function hasMore() {
        if (courseList == null || current < pageTotal) {
            return true;
        }
        return false;
    }

    function onLoadMore() {
        if(hasMore() && !loading) {
            setCurrent(current + 1);
            updateTimeStamp();
        }
    }

    return (
        <View className="course-group container full-height bg-gray">
            <View className="group-list full-height font-size-14">
                <ScrollView scrollY>
                    {
                        courseTypeList?.map(({ typeId, typeName, typeThumb }) => {
                            return (
                                <View
                                    key={typeId}
                                    className={`group-item ${activeGroupId === typeId ? 'active' : 'normal'}`}
                                    onClick={() => {
                                        setActiveGroupId(typeId);
                                        setCurrent(1);
                                        setPageTotal(0);
                                        setCourseList(null);
                                        updateTimeStamp();
                                    }}
                                >
                                    <Image
                                        src={typeThumb}
                                        className="image"
                                        mode="widthFix"
                                    />
                                    <Text>{typeName}</Text>
                                </View>

                            );
                        })
                    }
                </ScrollView>
            </View>
            <View className="course-list flex-1 full-height">
                <ScrollView
                    scrollY
                    className="scroll-view"
                    onScrollToLower={onLoadMore}
                >
                    <View className="font-bold m-b-10 font-size-14 align-center">
                        {courseTypeList?.find((item) => item.typeId === activeGroupId)?.typeName}
                    </View>
                    {
                        courseList?.map((data) => {
                            return (
                                <EntityCard
                                    data={data}
                                    key={data.courseId}
                                    onClick={() => {
                                        navigateTo({
                                            url: `/pages/courseDetail/index?id=${data.courseId}`,
                                        });
                                    }}
                                />
                            );
                        })
                    }
                    <InfiniteScrollHolder hasMore={hasMore()}/>
                </ScrollView>
            </View>
        </View>
    );
}

export default CourseGroup;
