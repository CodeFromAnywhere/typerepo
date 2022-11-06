/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["db-ui"]);

module.exports = withTM({
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_SITE: process.env.NEXT_PUBLIC_SITE,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: "worker-loader",
      options: {
        name: "static/[hash].worker.js",
        publicPath: "/_next/",
      },
    });

    // Overcome Webpack referencing `window` in chunks
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

    // Important: return the modified config
    return config;
  },
});
