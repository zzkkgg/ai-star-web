const development = {
    commonUrl: 'https://aistar.topwuhan.com',
};

const production = {
    commonUrl: 'https://aistar.topwuhan.com',
};

const envMap = {
    development,
    production,
};

const TARO_ENV = process.env.TARO_ENV;
const NODE_ENV = process.env.NODE_ENV;

const isH5 = TARO_ENV ? TARO_ENV === 'h5' : true; // 微信环境h5
const isWx = TARO_ENV === 'weapp';
const appConfigs = envMap[NODE_ENV] || development;

const isPlainH5 = isH5 && !navigator.userAgent.toLowerCase().includes('micromessenger'); // 非微信环境h5

export default appConfigs;
export {
    isH5,
    isWx,
    isPlainH5,
}
