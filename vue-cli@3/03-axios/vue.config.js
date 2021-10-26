const path = require('path')
module.exports = {

  // 配置 webpack-dev-server 行为。
  // devServer: {
  //   proxy: {
  //     // 配置跨域
  //     '/api': {
  //       target: 'http://music.eleuu.com', // 接口域名
  //       changOrigin: true // 是否跨域
  //       // secure: false,
  //       // ws: true,
  //       // pathRewrite: {
  //       //   '^/api': ''
  //       // }
  //     }
  //   }
  // },

  // 三方插件的选项
  pluginOptions: {
    // ...
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 导入全局公共样式
        path.resolve(__dirname, './src/assets/styles/reset.less')
      ]
    }
  }
}
