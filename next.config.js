/** @type {import('next').NextConfig} */
const path = require('path')
const webpack = require('webpack');

const nextConfig = {
    
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: "jquery",jQuery: "jquery","window.jQuery": "jquery",
      }));
     return config;
    }
}

module.exports = nextConfig
