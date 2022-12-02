import * as React from "react";
import { Div } from "react-with-native";
import { ALink } from "next-a-link";
import { renderMarkdownContent } from "markdown";
import { getFolderJs } from "fs-util-js";
import Image from "next/image";
/**
 * This homepage component assumes you provide it some CTA's (ideally 2 or 3) and some items.
 *
 * - The items will be swipable
 * - The logo should be available in `public/logo.png`
 *
 * ![Example](../assets/SwipeHomepage.mov)
 */
export var SwipeHomepage = function (props) {
    var ctas = props.ctas, items = props.items;
    var buttonClass = "bg-white/60 rounded-full hover:bg-white cursor-pointer text-black p-2";
    return (React.createElement(Div, null,
        React.createElement(Div, { className: "h-screen overflow-auto snap-mandatory snap-y" }, items.map(function (item, index) {
            var _a, _b;
            var finalMarkdown = item.isMarkdownNoLimit
                ? item.markdown
                : ((_a = item.markdown) === null || _a === void 0 ? void 0 : _a.substring(0, 500)) +
                    ((((_b = item.markdown) === null || _b === void 0 ? void 0 : _b.length) || 0) > 500 ? "..." : "");
            var nameSizeClass = item.title.length > 10 ? "text-2xl" : "text-6xl";
            return (React.createElement(Div, { key: "item".concat(index), style: {
                    backgroundImage: item.imagePath
                        ? "url(\"".concat(item.imagePath, "\")")
                        : undefined,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center 75%",
                }, className: "snap-center h-screen w-screen flex flex-col justify-center relative items-center ".concat(item.imagePath ? "text-white" : "text-black dark:text-white") },
                React.createElement(ALink, { href: item.href || "#", className: "absolute top-20 left-20 font-bold drop-shadow bg-green-500/20 rounded-md px-4 py-2 backdrop-blur-sm ".concat(nameSizeClass, " ").concat(item.href ? "cursor-pointer" : "cursor-default") }, item.title),
                item.markdown && item.markdownSourcePath && finalMarkdown ? (React.createElement(Div, { className: "w-[80vw]" }, renderMarkdownContent(finalMarkdown, {
                    projectRelativeMarkdownFilePath: item.markdownSourcePath,
                    projectRelativeBaseFolderPath: getFolderJs(item.markdownSourcePath),
                }))) : null,
                item.description ? (React.createElement(ALink, { href: item.href || "#", className: "absolute bottom-10 mx-4 rounded-md p-6 bg-white/30 backdrop-blur-sm ".concat(item.href ? "cursor-pointer" : "cursor-default") }, item.description)) : null));
        })),
        React.createElement(Div, { className: "z-index-1 absolute bottom-4 w-full flex flex-row justify-around" }, ctas.map(function (cta) {
            return (React.createElement(ALink, { href: cta.href, className: buttonClass }, cta.text));
        })),
        React.createElement(Div, { className: "z-index-1 absolute bg-white/60 rounded-full w-12 h-12 top-4 left-4" },
            React.createElement(Image, { src: "/logo.png", width: 50, height: 50 }))));
};
