const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "second-app",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "second-app",
      library: { type: "var", name: "secondApp" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule:
          "./projects/second-app/src/app/profile/profile.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, eager: true },
        "@angular/common": { singleton: true, eager: true },
        "@angular/router": { singleton: true, eager: true },
        "shared": { singleton: true, eager: true },
      },
    }),
  ],
};
