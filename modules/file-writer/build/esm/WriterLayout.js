import * as React from "react";
import { Div } from "react-with-native";
import { BreadCrumbs } from "breadcrumbs";
import { OpenFileWriterPages } from "./OpenFileWriterPages";
import { usePath } from "next-paths";
export var WriterLayout = function (props) {
    var fullPath = usePath().fullPath;
    return (React.createElement(Div, { className: "flex flex-col flex-1 h-full", textClassName: "dark:text-white" },
        React.createElement(Div, { className: "sticky top-0" },
            React.createElement(OpenFileWriterPages, { pagesObject: {} }),
            React.createElement(BreadCrumbs, { path: fullPath || "" })),
        props.children));
};
