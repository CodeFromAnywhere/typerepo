"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.logoutPostApi=void 0;var reply_1=__importDefault(require("server/reply")),logoutPostApi=function(){
//cookie("authToken", "").
return reply_1.default.send({isSuccessful:!0,message:"Logged out"})};
/**
 * Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */exports.logoutPostApi=logoutPostApi;
//# sourceMappingURL=logoutPostApi.js.map