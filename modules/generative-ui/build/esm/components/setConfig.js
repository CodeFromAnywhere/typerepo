import { setItem } from "react-with-native-store";
export var setConfig = function (apiUrl, disableAdmin, 
/**
 * TITLE: Absolute base path of your file system to show
 */
customAbsoluteBasePaths) {
    setItem("api.customUrl", apiUrl === "" ? null : apiUrl);
    setItem("generativeWeb.config", { disableAdmin: disableAdmin, customAbsoluteBasePaths: customAbsoluteBasePaths });
};
//# sourceMappingURL=setConfig.js.map