/** @type {import('next').NextConfig} */
const path = require('path')
const webpack = require('webpack');

const nextConfig = {
output: 'export',
//   webpack: (config, {isServer, webpack}) => {
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config

   
//         config.plugins.push(
//             new webpack.ProvidePlugin({
//                 $: 'jquery',
//                 jQuery: 'jquery',
//                 'window.jQuery': 'jquery'
//             })
//         )
   


//     // Important: return the modified config
//     return config
// },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = nextConfig
