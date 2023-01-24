import * as React from "react";
import { useStore } from "./store";
import { setConfig } from "./setConfig";
import { Div } from "react-with-native";
import { FunctionForm } from "function-form";
import { FancyLoader } from "fancy-loader";
import SetConfigIndex from "generative-ui/db/ts-functions/set-config.json";
import { showStandardResponse } from "cool-toast";
export var SettingsPage = function () {
    var _a = useStore("generativeWeb.config"), config = _a[0], _ = _a[1], hydrated = _a[2].hydrated;
    var _b = useStore("api.customUrl"), customUrl = _b[0], __ = _b[1], apiHydrated = _b[2].hydrated;
    return (React.createElement(Div, { className: "max-lg:mx-4 lg:mx-20" }, hydrated && apiHydrated ? (React.createElement(FunctionForm, { tsFunction: SetConfigIndex, initialValues: [
            customUrl,
            config.disableAdmin,
            config.customAbsoluteBasePaths,
        ], submitFunction: setConfig, withResult: function () {
            showStandardResponse({ isSuccessful: true, message: "Updated" });
        } })) : (React.createElement(FancyLoader, null))));
};
//# sourceMappingURL=SettingsPage.js.map