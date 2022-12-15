// import { api } from "api";
// import * as React from "react";
// import { MarkdownContent } from "markdown";
// import { useAlert } from "react-with-native-alert";
// import type { AlertButton } from "react-native";
import { successToast } from "cool-toast";
/**
 * Recursive hook that calls its own function if you click "respond", which creates an additional item in the thread
 */
export var usePromptResultAlert = function () {
    // const alert = useAlert();
    var showPromptAlert = function (originalPromptName, _, thread, projectRelativeFilePath) {
        // const markdownRender = (
        //   <MarkdownContent config={{}} content={textMarkdown || "No content"} />
        // );
        successToast("".concat(originalPromptName, " is now being executed on ").concat(projectRelativeFilePath, " (thread: ").concat(thread, ")"));
        // const buttons: AlertButton[] = [
        //   { text: "Okay", style: "cancel", onPress: () => null },
        //   {
        //     text: "Share",
        //     style: "default",
        //     onPress: () => {
        //       // should open share view
        //     },
        //   },
        //   {
        //     text: "Respond",
        //     style: "default",
        //     onPress: async () => {
        //       //  submits extra request that opens a new alert with the answer to that
        //       let response = prompt("What do you want to say?", "");
        //       const apiResult = await api.processChatGptPrompt({
        //         contextContent: null,
        //         selectionContent: null,
        //         contextualPromptSlug: undefined,
        //         customPromptContent: response || undefined,
        //         saveNewPromptWithName: null,
        //         isHeadless: false,
        //         isDeferred: true,
        //         thread,
        //         prompt_projectRelativePath: projectRelativeFilePath,
        //       });
        //       // NB: Recursion!
        //       showPromptAlert(
        //         originalPromptName,
        //         apiResult.result?.result?.text || "No response",
        //         thread,
        //         projectRelativeFilePath
        //       );
        //       // could also enable a loading indicator somewhere
        //     },
        //   },
        // ];
        // alert?.(originalPromptName, markdownRender, buttons);
    };
    return showPromptAlert;
};
//# sourceMappingURL=usePromptResultAlert.js.map