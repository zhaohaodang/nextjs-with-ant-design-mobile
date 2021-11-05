// const withLess = require('@zeit/next-less')
// const withCss = require('@zeit/next-css')
// const withPlugin = require('next-compose-plugins')
// const path = require('path')
// const theme = require('./package.json').theme
// module.exports = withPlugin([withCss, withLess], {
//     cssModules: true,
//     webpack(config, { isServer }) {
//         if (isServer) {
//             const antStyles = /antd-mobile\/.*?\/style.*?/
//             const origExternals = [...config.externals]
//             config.externals = [
//                 (context, request, callback) => {
//                     if (request.match(antStyles)) return callback()
//                     if (typeof origExternals[0] === 'function') {
//                         origExternals[0](context, request, callback)
//                     } else {
//                         callback()
//                     }
//                 },
//                 ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//             ]

//             config.module.rules.unshift({
//                 test: antStyles,
//                 use: 'null-loader',
//             })
//         }
//         config.module.rules.push({
//             test: /\.less$/,
//             use: [
//                 "postcss-loader",
//                 // "css-loader",
//                 { loader: 'less-loader', options: { modifyVars: theme } }
//             ],
//         })
//         console.log('externals', JSON.stringify(config.externals));
//         console.log('module', JSON.stringify(config.module));
//         config.resolve.alias = {
//             ...config.resolve.alias,
//             "@": path.join(__dirname)
//         }
//         return config
//     }
// })