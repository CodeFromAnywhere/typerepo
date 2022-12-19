import * as React from "react";
import { useProjectRelativeScreenshot } from "./useProjectRelativeScreenshot";
import { ClickableIcon } from "clickable-icon";
export var Shareable = function (props) {
    var _a = useProjectRelativeScreenshot(), ref = _a.ref, getImage = _a.getImage, projectRelativeFilePath = _a.projectRelativeFilePath;
    React.useEffect(function () {
        if (!projectRelativeFilePath)
            return;
        console.log("we have projectRelative change:", projectRelativeFilePath);
        // api.postTweetOnTwitter({
        //   email: "test",
        //   password: "test",
        //   phoneNo: "test",
        //   tweetMessage: "yo this is ridic",
        // });
    }, [projectRelativeFilePath]);
    return (React.createElement("div", null,
        React.createElement(ClickableIcon, { emoji: "\uD83D\uDDE3", onClick: getImage }),
        React.createElement("div", { ref: ref }, props.children)));
};
//# sourceMappingURL=Shareable.js.map