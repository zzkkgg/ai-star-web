import { useState } from 'react';
import { createSelectorQuery } from '@tarojs/taro';
import { Image, Swiper, SwiperItem } from '@tarojs/components';

let query;
function Banner({ bannerUrls }) {
    const [h, setH] = useState(150);

    if (!bannerUrls) {
        return null;
    }
    if(bannerUrls.length > 1) {
        return (
            <Swiper
                circular
                autoplay
                indicatorDots
                className="swiper"
                style={{ height: h }}
                indicatorColor='#999'
                indicatorActiveColor='#333'
            >
                {
                    bannerUrls.map(({ bannerId, bannerImage }) => {
                        return (
                            <SwiperItem key={bannerId}>
                                <Image
                                    src={bannerImage}
                                    className="banner"
                                    mode="widthFix"
                                    onLoad={(e) => {
                                        if (!query) {
                                            const { width, height } = e.target;
                                            query = createSelectorQuery();
                                            query.select('.swiper')
                                            .boundingClientRect()
                                            .exec((res) => {
                                                setH(res[0].width * height / width);
                                            })
                                        }
                                    }}
                                />
                            </SwiperItem>
                        );
                    })
                }
            </Swiper>
        );
    }
    return (
        <Image
            src={bannerUrls[0].bannerImage}
            className="banner"
            mode="widthFix"
        />
    );
}

export default Banner;
