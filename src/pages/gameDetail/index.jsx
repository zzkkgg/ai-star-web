import Taro from '@tarojs/taro';
import request from '@/utils/request';
import { useEffect, useState } from 'react';
import { View, RichText } from '@tarojs/components';
import { getRouterParams } from '@/utils/routeHelper';
import './index.less';

function GameDetail() {
    const [detail, setDetail] = useState(null);
    
    useEffect(() => {
        const { id } = getRouterParams();
        request.get({
            url: '/api/game/detail',
            data: {
                gameId: id,
            },
        }).then(({ data }) => {
            setDetail(data);
            Taro.setNavigationBarTitle({ title: data.gameTitle });
        });
    }, []);

    if (!detail) {
        return null;
    }

    return (
        <View className="game-detail container">
            <View className="title font-size-16 font-bold m-b-10 align-center">{detail.gameTitle}</View>
            <View className="publish-time font-size-12 m-b-10 align-center color-gray">
                {detail.gameAuthor} {detail.gameTime}
            </View>
            <View className="rich-text m-t-10 m-b-10">
                <RichText nodes={detail.gameContent} />
            </View>
        </View>
    );
}

export default GameDetail;
