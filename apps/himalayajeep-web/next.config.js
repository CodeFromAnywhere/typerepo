/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "himalayajeep-ui",
  "writer-input",
]);

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
    // Important: return the modified config
    return config;
  },
});
