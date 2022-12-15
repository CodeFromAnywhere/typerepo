"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUrl = void 0;
var use_url_store_1 = require("use-url-store");
var useUrl = function (queryKey) {
    /**
     * Here you can define your global storages that can be present in any URL
     *
     * Make sure you use the CustomUrlConfig type
     */
    var queryStore = {
        path: (0, use_url_store_1.useCustomUrlStore)("path", { type: "string" }),
        name: (0, use_url_store_1.useCustomUrlStore)("name", { type: "string" }),
        type: (0, use_url_store_1.useCustomUrlStore)("type", { type: "string" }),
        // for db page
        slug: (0, use_url_store_1.useCustomUrlStore)("slug", { type: "string" }),
        id: (0, use_url_store_1.useCustomUrlStore)("id", { type: "string" }),
    };
    return queryStore[queryKey];
};
exports.useUrl = useUrl;
//# sourceMappingURL=useUrl.js.map