"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shimmer = void 0;
var shimmer = function (w, h) { return "\n<svg width=\"".concat(w, "\" height=\"").concat(h, "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n    <linearGradient id=\"g\">\n      <stop stop-color=\"#CCC\" offset=\"20%\" />\n      <stop stop-color=\"#AAA\" offset=\"50%\" />\n      <stop stop-color=\"#CCC\" offset=\"70%\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"").concat(w, "\" height=\"").concat(h, "\" fill=\"#CCC\" />\n  <rect id=\"r\" width=\"").concat(w, "\" height=\"").concat(h, "\" fill=\"url(#g)\" />\n  <animate xlink:href=\"#r\" attributeName=\"x\" from=\"-").concat(w, "\" to=\"").concat(w, "\" dur=\"1s\" repeatCount=\"indefinite\"  />\n</svg>"); };
exports.shimmer = shimmer;
//# sourceMappingURL=shimmer.js.map