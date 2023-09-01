// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import pkg from '../package.json';

module.exports = {
    env: {
        NODE_ENV: '"production"'
    },
    defineConstants: {
    },
    mini: {},
    h5: {
        output: {
            filename: `js/[name].[hash:8].${pkg.version}.js`,
            chunkFilename: `chunk/[name].[chunkhash:8].${pkg.version}.js`
        },
        miniCssExtractPluginOption: {
            filename: `css/[name].${pkg.version}.css`,
            chunkFilename: `css/[id].${pkg.version}.css`,
        },
        webpackChain(chain) {
            chain.merge({
                optimization: {
                    splitChunks: {
                        chunks: 'all',
                        minSize: 30000,
                        maxSize: 0,
                        minChunks: 1,
                        maxAsyncRequests: 5,
                        maxInitialRequests: 3,
                        automaticNameDelimiter: '~',
                        automaticNameMaxLength: 30,
                        name: true,
                        cacheGroups: {
                            react: {
                                test: /react/,
                                priority: 10
                            },
                            vendors: {
                                test: /[\\/]node_modules[\\/]/,
                                priority: -10
                            },
                            default: {
                                minChunks: 2,
                                priority: -20,
                                reuseExistingChunk: true
                            },
                        }
                    }
                }
            });
            // chain.plugin('analyzer').use(BundleAnalyzerPlugin);
        }
    }
}
