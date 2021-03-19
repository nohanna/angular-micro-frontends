const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4202/',
    uniqueName: 'third-app',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'third-app',
      library: { type: 'var', name: 'thirdApp' },
      filename: 'remoteEntry.js',
      exposes: {
        HomeModule: './projects/third-app/src/app/home/home.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        shared: { singleton: true, eager: true },
      },
    }),
  ],
};
