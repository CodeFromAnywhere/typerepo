var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { AuthenticationLayout } from "layout";
import { useRouter } from "next/router";
export var MyLayout = function (props) {
    var nextPage = props.nextPage, pageProps = props.pageProps;
    var router = useRouter();
    // in index, we need this
    if (router.isReady && router.pathname === "/") {
        var Index = nextPage;
        return React.createElement(Index, __assign({}, pageProps));
    }
    return (React.createElement(AuthenticationLayout, { overwriteDefaultPages: ["signup"], nextPage: nextPage, pageProps: pageProps }));
};
//# sourceMappingURL=MyLayout.js.map