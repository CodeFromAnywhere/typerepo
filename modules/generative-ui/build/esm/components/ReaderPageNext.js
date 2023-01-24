import * as React from "react";
import { queries } from "api";
import { useQueryPath } from "./useQueryPath";
import { useStore } from "./store";
import { Div } from "react-with-native";
/**
 * ReaderPage to export for next project. Uses either the props from the next server, or if they're available, the props from the query.
 */
export var ReaderPageNext = function (props) {
    var _a, _b;
    // props provide the static data for the website
    var queryPath = useQueryPath();
    var basePath = process.env.NEXT_PUBLIC_BASEPATH;
    var config = useStore("generativeWeb.config")[0];
    var readerPageQuery = queries.useGetReaderPageProps(basePath, queryPath, true, config.activeCustomBasePath);
    var queryProps = (_b = (_a = readerPageQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.props;
    // either use the props returned from the query or from the static site
    var realProps = (queryProps === null || queryProps === void 0 ? void 0 : queryProps.actualProjectRelativeFilePath)
        ? queryProps
        : props;
    return React.createElement(Div, null, "TeSt");
    //  return <ReaderPage {...realProps} />;
};
//# sourceMappingURL=ReaderPageNext.js.map