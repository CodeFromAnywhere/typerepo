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
import { AssetView } from "asset-view";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { isPathRelative } from "fs-util-js";
import { Div, P } from "react-with-native";
// import { useLastSelection } from "share";
import { Tooltip } from "tooltip";
import { HtmlHeader } from "./HtmlHeader.js";
import { Parameter } from "./Parameter.js";
import { getYoutubeId } from "./getYoutubeId.js";
import { MarkdownContent } from "./MarkdownContent.js";
export var MarkdownContentRender = function (props) {
    var config = props.config, content = props.content;
    var markdownRender = (React.createElement(ReactMarkdown, { className: (config === null || config === void 0 ? void 0 : config.big) ? "max-w-lg" : undefined, rehypePlugins: [rehypeHighlight, remarkGfm, rehypeRaw], components: {
            h1: HtmlHeader,
            h2: HtmlHeader,
            h3: HtmlHeader,
            h4: HtmlHeader,
            h5: HtmlHeader,
            h6: HtmlHeader,
            img: function (_a) {
                var src = _a.src, alt = _a.alt;
                if (!src)
                    return React.createElement(Div, null, "Bad asset src");
                var isRelative = isPathRelative(src);
                if (isRelative && !config.projectRelativeMarkdownFilePath) {
                    // We can't show the asset in this scenario
                    return (React.createElement(P, null,
                        "![$",
                        alt,
                        "]($",
                        src,
                        ")"));
                }
                var url = isRelative ? undefined : src;
                var relativePath = isRelative ? src : undefined;
                var asset = { alt: alt, relativePath: relativePath, absoluteUrl: url };
                return (React.createElement(AssetView, { asset: asset, projectRelativeReferencingFilePath: config.projectRelativeMarkdownFilePath, hideDownloadLink: true, className: "w-96" }));
            },
            //Fix newlines with `<br>`
            br: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("br", __assign({}, props)));
            },
            details: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("details", __assign({ className: "group border border-gray-600 rounded-lg" }, props)));
            },
            summary: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("summary", __assign({ className: "bg-gray-200 dark:bg-gray-700 p-2 rounded-lg group-open:rounded-b-none group-open:border group-open:border-b-gray-600 select-none" }, props)));
            },
            td: function (_a) {
                var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                return (
                // @ts-ignore
                React.createElement("td", __assign({ className: "border-spacing-1 border-t border-r last:border-r-0 border-gray-600 dark:border-gray-100 p-2" }, props), children === null || children === void 0 ? void 0 : children.map(function (child) {
                    return child === "<br />" ? React.createElement("br", null) : child;
                })));
            },
            th: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("th", __assign({ className: "" }, props)));
            },
            table: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("div", { className: "inline-block rounded-lg border shadow-2xl" },
                    React.createElement("table", __assign({ className: "" }, props))));
            },
            tbody: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("tbody", __assign({ className: "border-gray-600 dark:border-gray-100" }, props)));
            },
            tr: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("tr", __assign({ className: "dark:even:bg-black even:bg-gray-400 even:bg-opacity-30" }, props)));
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
                // TODO: make this work for components as well, now only works if the children of p is raw text...
                // const text = makeArray(props.children)
                //   .map((x) => {
                //     if (typeof x === "string" || typeof x === "number") {
                //       return String(x);
                //     }
                //     return undefined;
                //   })
                //   .filter(notEmpty)
                //   .join("");
                var node = _a.node, props = __rest(_a, ["node"]);
                // const selectionResultsThisParagraph =
                //   config.selectionContextualPromptResults?.filter((x) =>
                //     x.selectionString ? text.includes(x.selectionString) : false
                //   );
                return (React.createElement("p", __assign({ style: {
                        marginTop: 15,
                        marginBottom: 15,
                        whiteSpace: "pre-line",
                    } }, props)));
                // <>
                {
                    /* {selectionResultsThisParagraph?.map((result) => {
                        return (
                          <Div key={`result-${result.id}`}>
                            {result.contextualPromptSlug}: {result.resultText}{" "}
                            (selection: {result.selectionString})
                          </Div>
                        );
                      })} */
                }
                {
                    /* </> */
                }
            },
            li: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return React.createElement("li", __assign({ className: "" }, props));
            },
            code: function (_a) {
                var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                // NB: There's a big problem with this because all code elements get put in a `<pre>` element. I don't think this is easy to remove, but we can look in the issues. we can also look in google for how to improve it with css because i couldn't figure it out myself
                var word = children[0];
                var wordString = typeof word === "string" ? word : undefined;
                return (wordString === null || wordString === void 0 ? void 0 : wordString.startsWith(".")) ? (React.createElement(Parameter, { text: wordString })) : (React.createElement("code", __assign({ className: "dark:bg-gray-700" }, props, { style: {
                        color: "darkcyan",
                        // NB: the below doesn't work!
                        wordBreak: "break-all",
                        wordWrap: "break-word",
                    } }), children));
            },
            a: function (_a) {
                var node = _a.node, href = _a.href, title = _a.title, props = __rest(_a, ["node", "href", "title"]);
                var youtubeId = getYoutubeId(href);
                if (youtubeId) {
                    return (React.createElement("iframe", { className: "aspect-video w-full", src: "https://www.youtube.com/embed/".concat(youtubeId), title: "Youtube vid", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
                }
                return (React.createElement(Tooltip, { placement: "left", tooltip: title ? (React.createElement("div", { className: "px-3" },
                        React.createElement(MarkdownContent, { content: title, config: {} }))) : (React.createElement("div", null)) },
                    React.createElement("a", __assign({ className: "dark:text-blue-200 text-blue-500", href: href }, props))));
            },
        } }, content));
    return markdownRender;
};
//# sourceMappingURL=MarkdownContentRender.js.map