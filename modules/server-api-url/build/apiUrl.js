"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
var sdk_env_public_1 = require("sdk-env-public");
var react_with_native_store_1 = require("react-with-native-store");
var port_conventions_1 = require("port-conventions");
var isDev_1 = require("./isDev");
var runRemoteServer = sdk_env_public_1.publicLocalEnvironmentVariables.runRemoteServer ||
    sdk_env_public_1.publicEnvironmentVariables.runRemoteServer;
/**
 * NEEDED FOR MULTI DEPLOYMENTS (passionfruit)
 */
var remoteServer = process.env.NEXT_PUBLIC_API_URL || sdk_env_public_1.publicEnvironmentVariables.remoteServer;
// same ip as the ip used in the browser (not only localhost)
var hostname = typeof window !== "undefined" ? window.location.hostname : "localhost";
var localhostServer = "http://".concat(hostname, ":").concat(port_conventions_1.ports["function-server"]);
var customApiUrl = (0, react_with_native_store_1.getItemSync)("api.customUrl");
var realCustomApiUrl = typeof customApiUrl === "string" && customApiUrl !== ""
    ? customApiUrl
    : undefined;
exports.apiUrl = realCustomApiUrl
    ? realCustomApiUrl
    : isDev_1.isDev || runRemoteServer
        ? remoteServer
        : localhostServer;
//# sourceMappingURL=apiUrl.js.map