"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.apiUrl=void 0;var sdk_env_public_1=require("sdk-env-public"),isDev_1=require("./isDev"),hostname="undefined"!=typeof window?window.location.hostname:"localhost",runRemoteServer=sdk_env_public_1.publicLocalEnvironmentVariables.runRemoteServer||sdk_env_public_1.publicEnvironmentVariables.runRemoteServer,serverPort=sdk_env_public_1.publicLocalEnvironmentVariables.serverPort||sdk_env_public_1.publicEnvironmentVariables.serverPort,localhostServer="http://".concat(hostname,":").concat(serverPort);exports.apiUrl=!isDev_1.isDev||runRemoteServer?sdk_env_public_1.publicEnvironmentVariables.remoteServer:localhostServer;
//# sourceMappingURL=apiUrl.js.map