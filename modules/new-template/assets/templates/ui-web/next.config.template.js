/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
/**
 * Put your `Operation`s here with `OperationClassification` ui-ts here, so they will be transpiled
 */

const withTM = require("next-transpile-modules")([]);
module.exports = withPWA({ dest: "public" })(
  withTM({
    reactStrictMode: true,
    publicRuntimeConfig: {
      NEXT_PUBLIC_SITE: process.env.NEXT_PUBLIC_SITE,
    },
  })
);
