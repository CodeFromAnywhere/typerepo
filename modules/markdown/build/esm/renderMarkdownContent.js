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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import rehypeRaw from "rehype-raw";
// import remarkGfm from "remark-gfm";
import { AssetView } from "asset-view";
import { getFolderJs, isPathRelative } from "fs-util-js";
import { getImplicitId } from "markdown-parse-js";
import { Div, Span } from "react-with-native";
import { Tooltip } from "tooltip";
export var header = function (_a) {
    var level = _a.level, children = _a.children;
    var levelSize = level === 1
        ? "text-3xl"
        : level === 2
            ? "text-2xl"
            : level === 3
                ? "text-xl"
                : level === 4
                    ? "text-lg"
                    : level === 5
                        ? "text-md"
                        : level === 6
                            ? "text-sm"
                            : "text-xs";
    // {...props
    return (React.createElement(Div, { id: getImplicitId(String(children)), className: levelSize }, children));
};
/**
 * renders a markdown striing (without frontmatter)
 */
export var renderMarkdownContent = function (content, config) {
    if (!content)
        return "No content";
    // console.log("Need to render:", content);
    return (React.createElement(Span, null,
        React.createElement(ReactMarkdown, { className: (config === null || config === void 0 ? void 0 : config.big) ? "max-w-lg" : undefined, 
            //rehypePlugins={[rehypeHighlight, remarkGfm, rehypeRaw]}
            components: {
                h1: header,
                h2: header,
                h3: header,
                h4: header,
                h5: header,
                h6: header,
                img: function (_a) {
                    var src = _a.src, alt = _a.alt;
                    console.log({ src: src, alt: alt });
                    if (!src)
                        return React.createElement(Div, null, "Bad asset src");
                    var isRelative = isPathRelative(src);
                    var url = isRelative ? undefined : src;
                    var relativePath = isRelative ? src : undefined;
                    var asset = { alt: alt, relativePath: relativePath, absoluteUrl: url };
                    console.log({ isRelative: isRelative, url: url, relativePath: relativePath, asset: asset, config: config });
                    return (React.createElement(AssetView, { asset: asset, projectRelativeReferencingFilePath: config.projectRelativeMarkdownFilePath }));
                },
                //Fix newlines with `<br>`
                br: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return (
                    // @ts-ignore
                    React.createElement("br", __assign({}, props)));
                },
                // details: ({ node, ...props }: any) => {
                //   console.log("DETAILS DETECTED");
                //   return (
                //     // @ts-ignore
                //     <details {...props} />
                //   );
                // },
                // summary: ({ node, ...props }: any) => {
                //   console.log("SUMMARY DETECTED");
                //   return (
                //     // @ts-ignore
                //     <summary {...props} />
                //   );
                // },
                td: function (_a) {
                    var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                    return (
                    // @ts-ignore
                    React.createElement("td", __assign({ className: "border border-gray-900 dark:border-gray-100" }, props), children === null || children === void 0 ? void 0 : children.map(function (child) {
                        return child === "<br />" ? React.createElement("br", null) : child;
                    })));
                },
                th: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return (
                    // @ts-ignore
                    React.createElement("th", __assign({ className: "border border-gray-900 dark:border-gray-100" }, props)));
                },
                ol: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return (React.createElement("ol", __assign({ className: "list-decimal mx-3 p-2" }, props)));
                },
                ul: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return (React.createElement("ul", __assign({ style: { listStyleType: "circle" }, className: "mx-3 p-2" }, props)));
                },
                p: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return (React.createElement("p", __assign({ style: { marginTop: 15, marginBottom: 15 } }, props)));
                },
                li: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return React.createElement("li", __assign({ className: "" }, props));
                },
                code: function (_a) {
                    var _b;
                    var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                    // NB: There's a big problem with this because all code elements get put in a `<pre>` element. I don't think this is easy to remove, but we can look in the issues. we can also look in google for how to improve it with css because i couldn't figure it out myself
                    var word = children[0];
                    var foundWord = typeof word === "string"
                        ? (_b = config === null || config === void 0 ? void 0 : config.augmentedWordObject) === null || _b === void 0 ? void 0 : _b[word]
                        : undefined;
                    return foundWord &&
                        foundWord.spoiler &&
                        foundWord.spoiler.length > 0 ? (React.createElement(Tooltip, { placement: "left", tooltip: React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "font-semibold px-3 mb-0 border-b border-solid border-gray-100 rounded-t-lg" }, foundWord.word),
                            React.createElement("div", { className: "px-3" }, renderMarkdownContent(foundWord.spoiler, {
                                projectRelativeBaseFolderPath: getFolderJs(foundWord.projectRelativeMarkdownSourcePath),
                                projectRelativeMarkdownFilePath: foundWord.projectRelativeMarkdownSourcePath,
                            }))) },
                        React.createElement("a", __assign({ href: "/".concat(foundWord === null || foundWord === void 0 ? void 0 : foundWord.queryPath), style: { color: "darkred" } }, props), children))) : (React.createElement("code", __assign({ className: "dark:bg-gray-700" }, props, { style: {
                            color: "darkcyan",
                            // NB: the below doesn't work!
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                        } }), children));
                },
                a: function (_a) {
                    var node = _a.node, href = _a.href, props = __rest(_a, ["node", "href"]);
                    var youtubeId = getYoutubeId(href);
                    if (youtubeId) {
                        return (React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/".concat(youtubeId), title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
                    }
                    return (React.createElement("a", __assign({ className: "dark:text-blue-200 text-blue-500", href: href }, props)));
                },
            } }, content)));
};
export var getYoutubeId = function (url) {
    if (!url)
        return;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    }
    return;
};
