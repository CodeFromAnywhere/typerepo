import * as React from "react";
import { pickRandomArrayItem } from "js-util";
import { Div } from "react-with-native";
import { MarkdownCodeblock } from "markdown";
import { api } from "api";
var colors = ["red", "green", "blue", "yellow", "orange", "purple", "brown"];
export var Timeline = function (props) {
    var items = props.items;
    return (React.createElement(Div, { className: "h-screen overflow-auto snap-mandatory snap-y" }, items.map(function (item) {
        return (React.createElement(Div, { className: "snap-center h-screen w-screen flex justify-center items-center", style: { backgroundColor: pickRandomArrayItem(colors) } }, item.component ? (item.component()) : (React.createElement(Div, { className: "max-w-[80vw]", onClick: function () {
                console.log("supposed to open", item);
                api.vscodeOpen({
                    files: [
                        {
                            projectRelativePath: item.projectRelativeFilePath,
                            line: item.line,
                        },
                    ],
                });
            } },
            React.createElement(MarkdownCodeblock, { text: item.markdown || "Nothing to show", isModeStatic: true, minimalMode: "scroll", extension: "tsx" })))));
    })));
};
