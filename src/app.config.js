const pages = [
    'pages/home/index',
    'pages/activities/index',
    'pages/mine/index',
    'pages/gameDetail/index',
    'pages/activityDetail/index',
    'pages/courseDetail/index',
    'pages/courseGroup/index'
];

const tabBar = {
    list: [
        {
            iconPath: './assets/images/tab-bar/home.png',
            selectedIconPath: './assets/images/tab-bar/home-active.png',
            pagePath: 'pages/home/index',
            text: '课程'
        },
        {
            iconPath: './assets/images/tab-bar/activities.png',
            selectedIconPath: './assets/images/tab-bar/activities-active.png',
            pagePath: 'pages/activities/index',
            text: '活动'
        },
        // {
        //     iconPath: './assets/images/tab-bar/mine.png',
        //     selectedIconPath: './assets/images/tab-bar/mine-active.png',
        //     pagePath: 'pages/mine/index',
        //     text: '我的'
        // }
    ],
    color: '#000000',
    selectedColor: '#5C62AA',
    backgroundColor: '#fff',
    borderStyle: 'white',
};

const window = {
    navigationBarTitleText: '爱思塔编程',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#FFFFFF',
};

export default {
    pages,
    tabBar,
    window,
}
