import { Div, Li, P, Ul } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { Tabs } from "tabs";
import { api, queries } from "api";
import { ClickableIcon } from "clickable-icon";
import { useRouter } from "react-with-native-router";
import { Test } from "../components/Flow";
import { getQueryPath } from "markdown-reader-functions-js";
import { MarkdownView } from "writer-input";
import { FunctionExecutionTable } from "../components/FunctionExecutionTable";
import { MarkdownCodeblock } from "markdown";
import { destructureOptionalObject, makeArray } from "js-util";
import { FancyLoader } from "fancy-loader";
import { useAlert } from "react-with-native-alert";
import { FormTab } from "./FormTab";
import { BigButton } from "big-button";
import { errorToast } from "cool-toast";
export const FunctionPage = () => {
  const router = useRouter();

  const fullPath = router.query.paths ? makeArray(router.query.paths) : [];

  const functionName = fullPath.pop();
  const queryPath = getQueryPath(router.query);

  const tsFunctionQuery = queries.useGetTsFunction(functionName);
  // todo : add query to tsFunction
  const { tsFunction } = destructureOptionalObject(
    tsFunctionQuery.data?.result
  );

  const functionExecutions =
    queries.useGetFunctionExecutions(functionName).data?.result || [];

  const renderNavigation = () => {
    return (
      <Div className="flex flex-row justify-between">
        {queryPath.length > 1 ? (
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
        ) : null}
        <P className="text-3xl">{functionName}</P>
        <Div />
      </Div>
    );
  };

  const renderPage = () => {
    if (!tsFunction) {
      return tsFunctionQuery.isLoading ? (
        <FancyLoader big />
      ) : (
        <P>Select a function to get to work</P>
      );
    }

    /**
  ### Tab 7: Recent executions tab
  
  `FunctionExecution[].sort(createdAt).slice(0,100)`
  
  Actions for every item:
  
  - set `isTest` to true
  - set `isExample` to true
  - fill in in form in tab 1
  - execute directly
  
     */
    const recentTab = {
      title: "Recent",
      emoji: "🕰️",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"recent"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    const formTab = {
      title: "Form",
      emoji: "📝",
      renderTab: () => <FormTab tsFunction={tsFunction} />,
    };

    /** 
  ### Tab 2: Function Docs

  Generate on the fly based on the `TsFunction` (extrahere from docs generation lib)

  */
    const docsTab = {
      title: "Docs",
      emoji: "ℹ️",
      renderTab: () => {
        return (
          <>
            <P className="text-xl lg:text-4xl w-full">
              &nbsp;&nbsp;{tsFunction?.name}
            </P>

            {tsFunction?.description ? (
              // TODO: use `props.functionData.tsFunction.operationRelativeTypescriptFilePath` to deterimne markdown file path and folder

              <Div>
                <MarkdownView
                  markdownParse={mdToJsonParse(tsFunction.description)}
                  markdownParseRenderConfig={{
                    projectRelativeMarkdownFilePath: "",
                    projectRelativeBaseFolderPath: "",
                  }}
                  view="view"
                />
              </Div>
            ) : null}
          </>
        );
      },
    };

    /**
     * TAB 3: Code
     *
     * TODO: Can later be replaced with the writer-input for the file of the function, so you can immediately see your coding result in the other tabs...
     */
    const codeTab = {
      title: "Code",
      emoji: "💻",
      renderTab: () => {
        return tsFunction?.rawText ? (
          <Div className="flex flex-col items-center">
            <MarkdownCodeblock
              text={`const ${tsFunction.name} =${tsFunction.rawText}`}
              extension="ts"
              isModeStatic
              minimalMode="full"
            />

            <Div className="flex flex-col items-center pt-8 gap gap-6">
              <P>Wanna start?</P>

              <BigButton
                title="Open in VSCode"
                onClick={async () => {
                  if (!tsFunction.operationName) {
                    errorToast(
                      "Couldn't find which operation this function belongs to, can't open the file"
                    );
                    return;
                  }

                  const result = await api.vscodeOpen({
                    files: [
                      {
                        operationName: tsFunction.operationName,
                        operationRelativeFilePath:
                          tsFunction.operationRelativeTypescriptFilePath,
                      },
                    ],
                  });

                  return;
                }}
                emoji="👨‍💻"
              />
            </Div>
          </Div>
        ) : (
          "Code not found"
        );
      },
    };

    /**
            ### Tab 4: Exersize tab

            Get all examples of this function, write exersize in markdown (ask Wijnand for more details)
            */

    const exersizeTab = {
      title: "Exersizes",
      emoji: "👶",
      renderTab: () => {
        return "ex";
      },
    };

    /**
### Tab 5: Examples Tab

`FunctionExecution[].filter(x.isExample)`

Show `x.exampleDescription` too (markdown)

Actions for every item:

- set `isExample` to false
- set `isTest` to true
- fill in in form in tab 1
- execute directly

*/

    const examplesTab = {
      title: "Examples",
      emoji: "👻",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"example"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    /**
### Tab 6: Tests Tab

`FunctionExecution[].filter(x.isTest))`

Actions for every item:

- set `isTest` to false
- set `isExample` to true
- fill in in form in tab 1
- execute directly
*/

    const testsTab = {
      title: "Tests",
      emoji: "🔧",
      renderTab: () => {
        return (
          <FunctionExecutionTable
            tsFunction={tsFunction}
            type={"test"}
            functionExecutions={functionExecutions}
          />
        );
      },
    };

    const dataTab = {
      title: "Data",
      emoji: "💿",
      renderTab: () => {
        return "This tab can later show the models that are put under in the doc-comment as being relevant. E.g. if you put 'DATA: JeepType, LocationType' in your function's doc-comment, it would show the CRUD-UI for those models in this tab. Possibly, one tab for every model, or simply one tab for all models and visually make it disabled if there is no data connected to the function...";
      },
    };

    const mediaTab = {
      title: "Media",
      emoji: "👥",
      renderTab: () => {
        return (
          <Div>
            <Ul>
              <Li>Show related postables & media-posts</Li>
              <Li>Create new postable</Li>
              <Li>
                Basically, the social-media-ui but just focussed on this
                function
              </Li>
            </Ul>
          </Div>
        );
      },
    };

    const treeTab = {
      title: "Trees",
      emoji: "🌳",
      renderTab: () => {
        return (
          <Div className="w-max h-80">
            <Ul>
              <Li>
                Show graph with the function in the middle, below all functions
                that are required for the function (dependencies), above all the
                functions that require this function (dependents)
              </Li>
              <Li>
                Being able to see this multiple multiple layers deep would be
                great (configurable).
              </Li>
              <Li>
                Dependencies must be brown (root like) while dependents (up)
                must be green (leave like)
              </Li>
              <Li>
                Other tree: find other functions that take the output type of
                this function as its input. Use the output of your
                FunctionExecutions on "related" functions.
              </Li>
            </Ul>

            <Test />
          </Div>
        );
      },
    };
    return (
      <Div>
        {renderNavigation()}

        <Tabs
          tabs={[
            codeTab,
            formTab,
            //dataTab,
            recentTab,
            testsTab,
            examplesTab,
            docsTab,
            //treeTab,
            //exersizeTab,
            //mediaTab,
          ]}
        />
      </Div>
    );
  };

  return (
    <Div className="pb-4 px-4 w-full" scroll>
      {renderPage()}
    </Div>
  );
};
