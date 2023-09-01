import ColorBox from '@/components/ColorBox';
import { View, Button, Image } from '@tarojs/components';
import aiStarBgImg from './assets/ai-star-bg.png';
import './index.less';

export default function Mine() {
   return (
      <View className="mine">
         <ColorBox>
            <View className="font-bold color-white font-size-18">活动入口</View>
         </ColorBox>
         <View className="align-center main-bg-box">
            <Image
               src={aiStarBgImg}
               mode="widthFix"
               className="main-bg"
            />
         </View>
         <View className="align-center btn-box">
            <Button
               className="btn btn-login font-bold color-white font-size-24"
               onClick={() => {

               }}
            >
               登录
            </Button>
         </View>
      </View>
   );
}
