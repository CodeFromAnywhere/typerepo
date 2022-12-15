import * as React from "react";
import { MarkdownCodeblock } from "markdown";
import { api } from "api";
import { Div } from "react-with-native";
export var Timeline = function (props) {
    var items = props.items, isHorizontal = props.isHorizontal;
    return (React.createElement("div", { className: "flex ".concat(isHorizontal ? "snap-x flex-row" : "snap-y flex-col", " snap-mandatory h-screen w-full mx:auto overflow-scroll") }, items.map(function (item, index) {
        return (React.createElement(Div, { key: "timeline-item-".concat(index), className: "snap-start shrink-0 w-screen h-screen place-items-center", style: {
                backgroundImage: item.imageUrl
                    ? "url(\"".concat(item.imageUrl, "\")")
                    : undefined,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center 75%",
            } }, item.component ? (item.component()) : (React.createElement(Div, { className: "max-w-[80vw]", onClick: function () {
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
//# sourceMappingURL=Timeline.js.map