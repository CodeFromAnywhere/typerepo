import * as React from "react";
import { useProjectRelativeScreenshot } from "share";
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
        React.createElement("p", { onClick: getImage }, "share"),
        React.createElement("div", { ref: ref }, props.children)));
};
//# sourceMappingURL=Shareable.js.map