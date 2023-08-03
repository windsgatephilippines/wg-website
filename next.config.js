/** @type {import('next').NextConfig} */
const path = require('path')
const webpack = require('webpack');

const nextConfig = {
    
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = nextConfig
