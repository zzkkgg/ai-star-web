import request from '@/utils/request';
import { navigateTo } from '@tarojs/taro';
import { useState, useEffect } from 'react';
import EntityCard from '@/components/EntityCard';
import { View, Text, ScrollView } from '@tarojs/components';
import InfiniteScrollHolder from '@/components/InfiniteScrollHolder';
import './index.less';

function isTabActive(activeTabIndex, index) {
    return activeTabIndex === index ? 'active': 'normal';
}

export default function Activities() {
    const [list, setList] = useState(null);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(false);
    const [pageTotal, setPageTotal] = useState(0);
    const [timeStamp, setTimeStamp] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    function updateTimeStamp() {
        setTimeStamp(Date.now());
    }

    function onLoadMore() {
        if(hasMore() && !loading) {
            setCurrent(current + 1);
            updateTimeStamp();
        }
    }

    function resetStatus() {
        setCurrent(1);
        setLoading(true);
        setPageTotal(0);
        setList(null);
        updateTimeStamp();
    }
    
    useEffect(fetchList, [timeStamp]);

    function hasMore() {
        if (list == null || current < pageTotal) {
            return true;
        }
        return false;
    }

    function fetchList() {
        setLoading(true);
        request.get({
            url: `/api/${activeTabIndex === 0 ? 'activity' : 'game'}/list`,
            data: {
                page: current,
                size: 10,
            },
        }).then(({ data }) => {
            const { list: _list = [], pages, pageNum } = data;
            setPageTotal(pages);
            setList(pageNum === 1 ? _list : list.concat(_list));
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <View className="activities font-size-14">
            <View className="banner" />
            <View className="tabs align-center m-t-20 m-b-20">
                <Text
                    onClick={() => {
                        setActiveTabIndex(0);
                        resetStatus();
                    }}
                    className={`tab-item m-r-20 ${isTabActive(activeTabIndex, 0)}`}
                >
                    活动
                </Text>
                <Text
                    onClick={() => {
                        setActiveTabIndex(1);
                        resetStatus();
                    }}
                    className={`tab-item ${isTabActive(activeTabIndex, 1)}`}
                >
                    赛事
                </Text>
            </View>
            <View className="list flex-1">
                <ScrollView
                    scrollY
                    className="scroll-view"
                    onScrollToLower={onLoadMore}
                >
                    {
                        list?.map((data) => {
                            const id = data.activityId || data.gameId;
                            return (
                                <EntityCard
                                    data={data}
                                    key={id}
                                    onClick={() => {
                                        navigateTo({
                                            url: `/pages/${activeTabIndex === 0 ? 'activity' : 'game'}Detail/index?id=${id}`,
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
