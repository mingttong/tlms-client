var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: '"http://localhost:8088/"', // 在代理中转到8360端口
})
