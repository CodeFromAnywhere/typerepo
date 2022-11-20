import { successToast, warningToast, errorToast, infoToast } from "cool-toast";
import { TsFunction } from "code-types";
import { FunctionForm } from "function-form";
import { Json } from "json-util";
import { renderMarkdownContent } from "markdown";
import { useState } from "react";
import { createCodeblockMarkdown } from "ui-util";
import { RealApiReturnType } from "api-types";
import { Div } from "react-with-native";
import { useStore } from "../store";

/**

### Tab 1: Function Form

Uses `<FunctionForm>` component

Executes the function directly or through API (depending on whether or not it is a node-only-function or bare JS)

Don't show this tab for JSX components

*/
export const FormTab = (props: { tsFunction: TsFunction }) => {
  const { tsFunction } = props;
  const [executionId] = useStore("executionId");
  const [initialValues] = useStore("initialValues");
  const [resultJson, setResultJson] = useState<{
    [key: string]: RealApiReturnType<any> | undefined | string;
  }>({});

  const jsonCodeblock =
    resultJson[executionId] === undefined
      ? null
      : renderMarkdownContent(
          createCodeblockMarkdown(JSON.stringify(resultJson, null, 2), "json"),
          // NB: since there won't be any assets in here, it doesn't matter where the md is made
          {
            projectRelativeBaseFolderPath: "",
            projectRelativeMarkdownFilePath: "",
          }
        );

  return (
    <Div>
      <FunctionForm
        key={executionId}
        tsFunction={tsFunction}
        initialValues={initialValues}
        submitFunction={
          undefined
          // provide this later, for js functions
        }
        withApiResult={(result: RealApiReturnType<any> | undefined) => {
          setResultJson({ ...resultJson, [executionId]: result });
          if (
            !result ||
            typeof result !== "object" ||
            Array.isArray(result) ||
            result.isSuccessful === undefined
          ) {
            infoToast("We got no satisfactory result to show you anything");
            return;
          }

          if (result.isSuccessful === false || result.isUnauthorized === true) {
            errorToast(result.message);
            return;
          }

          if (!result.result) {
            successToast(
              "Seems to have gone well, but we don't know how it went"
            );
            return;
          }

          if (
            result.result &&
            typeof result.result === "object" &&
            !Array.isArray(result.result)
          ) {
            const maybeSuccessIndicator = result.result.isSuccessful;

            if (maybeSuccessIndicator !== undefined) {
              const rightToast =
                maybeSuccessIndicator === true ? successToast : errorToast;

              rightToast(result.result.message);

              return;
            }
          }

          return successToast("We got a response");
        }}
      />
      {jsonCodeblock}
    </Div>
  );
};
