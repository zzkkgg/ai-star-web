const path = require('path');

const config = {
  projectName: 'fulu-contract-member-web',
  date: '2022-9-19',
  designWidth: 750,
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: true
    }
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  alias: {
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/context': path.resolve(__dirname, '..', 'src/context'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
  },

  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/configs', to: 'dist/h5/resources/js/' },
      { from: 'src/MP_verify_yIatbQVpe3s2pCfo.txt', to: 'dist/h5/MP_verify_yIatbQVpe3s2pCfo.txt' }
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    devServer: {
      host: '127.0.0.1',
      port: 80
    },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
