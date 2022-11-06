import { useState } from "react";
import { FunctionParameter } from "code-types";
import { Div, P } from "react-with-native";
import { createCodeblockMarkdown } from "ui-util";
import { renderMarkdownContent } from "markdown";

export const SimplifiedSchemaFormDebug = ({
  parameters,
  values,
}: {
  parameters: FunctionParameter[] | undefined;
  values: any[];
}) => {
  const [showParams, setShowParams] = useState(false);
  return (
    <Div>
      <P>values</P>
      {renderMarkdownContent(
        createCodeblockMarkdown(JSON.stringify(values, null, 2), "json"),
        // NB: since there won't be any assets in here, it doesn't matter where the md is made
        {
          projectRelativeBaseFolderPath: "",
          projectRelativeMarkdownFilePath: "",
        }
      )}
      <P
        className="hover:underline cursor-pointer"
        onClick={() => setShowParams(!showParams)}
      >
        params (toggle)
      </P>{" "}
      {showParams
        ? renderMarkdownContent(
            createCodeblockMarkdown(
              JSON.stringify(parameters, null, 2),
              "json"
            ),
            // NB: since there won't be any assets in here, it doesn't matter where the md is made
            {
              projectRelativeBaseFolderPath: "",
              projectRelativeMarkdownFilePath: "",
            }
          )
        : null}
    </Div>
  );
};
