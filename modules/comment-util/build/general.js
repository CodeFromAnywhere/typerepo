#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stripComment=exports.trim=exports.stripStar=exports.stripCommentEnd=exports.stripCommentStart=exports.stripSlashes=void 0;var js_util_1=require("js-util"),stripSlashes=function(t){return t.startsWith("//")?t.substring(2).trim():t};exports.stripSlashes=stripSlashes;var stripCommentStart=function(t){return t.startsWith("/**")?t.substring(3).trim():t.startsWith("/*")?t.substring(2).trim():t};exports.stripCommentStart=stripCommentStart;
// only strip slahes for single-line comments
var stripCommentEnd=function(t){return t.endsWith("*/")?t.substring(0,t.length-2).trim():t};exports.stripCommentEnd=stripCommentEnd;var stripStar=function(t){return t.startsWith("*")?t.substring(1).trim():t};exports.stripStar=stripStar;var trim=function(t){return t.trim()};exports.trim=trim;
/** removes new lines at beginning and end
 *
 * NB: This function uses a small recursion! I don't know if this is very efficient, but shouldn't be too deep!
 *
 * NB: it should be noted that a newline apparently seems to be counting as a single character! Strange.
 */
var trimSurroundingNewlines=function(t){return t.startsWith("\n")?trimSurroundingNewlines(t.substring(1)):t.endsWith("\n")?trimSurroundingNewlines(t.substring(0,t.length-1)):t},stripComment=function(t){var r=t.split("\n").map((function(t){return(0,js_util_1.apply)([exports.trim,exports.stripSlashes,exports.stripCommentStart,exports.stripCommentEnd,exports.stripStar,exports.trim],t)})).join("\n");return(0,js_util_1.apply)([trimSurroundingNewlines],r)};
/**
  parses comments (single line, multiline and doc) and removes the comment syntax

  - removes slashes
  - removes multiline comment prefix
  - removes multiline comment suffix
  - removes doccomment stars

  example input: `// comment`, output: `comment`

  example input:
  ```
  /**
   * some
   * multiline
   * comment *~/
   ```
   output:
   ```
   some
   multiline
   comment
   ```
 */exports.stripComment=stripComment;
//# sourceMappingURL=general.js.map