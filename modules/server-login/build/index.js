"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./addAuthenticationMethod"), exports);
__exportStar(require("./addDeviceAuthenticationMethodWithContext"), exports);
__exportStar(require("./addPersonAuthenticationMethodWithContext"), exports);
__exportStar(require("./confirmAuthenticationMethod"), exports);
__exportStar(require("./findAuthenticatedPersonWithHandle"), exports);
__exportStar(require("./findLoggedInPersonsWithContext"), exports);
__exportStar(require("./getMeWithContext"), exports);
__exportStar(require("./getPublicPerson"), exports);
__exportStar(require("./getPublicPersons"), exports);
__exportStar(require("./loginWithContext"), exports);
__exportStar(require("./loginWithPasswordWithContext"), exports);
__exportStar(require("./logoutWithContext"), exports);
__exportStar(require("./removeDeviceAuthenticationMethodWithContext"), exports);
__exportStar(require("./removePersonAuthenticationMethodWithContext"), exports);
__exportStar(require("./signupWithContext"), exports);
__exportStar(require("./signupWithPasswordWithContext"), exports);
__exportStar(require("./switchCurrentPerson"), exports);
__exportStar(require("./updateMeWithContext"), exports);
__exportStar(require("./validation/isPhoneNumber"), exports);
__exportStar(require("./validation/isValidPassword"), exports);
//# sourceMappingURL=index.js.map