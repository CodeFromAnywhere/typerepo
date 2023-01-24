import { Button, Div, Input, P } from "react-with-native";
import { useState } from "react";
import { mdToJsonParse } from "markdown-parse-js";
import { MarkdownView } from "writer-input";
import { FunctionExecution, TsFunction } from "code-types";
import { Table } from "react-with-native-table";
import { notEmpty } from "js-util";
import { FancyLoader } from "fancy-loader";
import { api, queries } from "api";
import { useStore } from "../../util/store";
import { MarkdownCodeblock } from "markdown";
import { stringToJson } from "string-to-json";
type ActionItem = {
  id: number;
  onClick: () => void;
  title: string;
  emoji: string;
};

export const FunctionExecutionTable = (props: {
  tsFunction?: TsFunction;
  functionExecutions: FunctionExecution[];
  type: "example" | "test" | "recent";
}) => {
  const { functionExecutions, type, tsFunction } = props;

  const [executionId, setExecutionId] = useStore("executionId");
  const [initialValues, setInitialValues] = useStore("initialValues");

  const [currentTab, setCurrentTab] = useStore("tabs.currentTab");
  const [loading, setLoading] = useState<{ [id: string]: number | undefined }>(
    {}
  );

  const functionExecutionsQuery = queries.useGetFunctionExecutions(
    tsFunction?.name
  );

  if (!tsFunction) {
    return <Div>Hmmm vremd</Div>;
  }

  const withLoading = async (
    callback: () => Promise<void>,
    id: string,
    actionNumber: number
  ) => {
    setLoading((loading) => ({ ...loading, [id]: actionNumber }));

    await callback();

    setLoading((loading) => ({
      ...loading,
      [id]: undefined,
    }));
  };

  const finalFunctionExecutions =
    type === "example"
      ? functionExecutions.filter((item: FunctionExecution) => item.isExample)
      : type === "test"
      ? functionExecutions.filter((item: FunctionExecution) => item.isTest)
      : functionExecutions
          .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
          .slice(0, 100);

  const isDataLoading =
    functionExecutionsQuery.isRefetching ||
    functionExecutionsQuery.isFetching ||
    functionExecutionsQuery.isLoading;
  return (
    <>
      {isDataLoading ? <FancyLoader big /> : null}
      <Table
        data={finalFunctionExecutions}
        columns={[
          {
            name: "Input",
            objectParameterKey: "inputParameters",
            customPresentation: (item) => {
              return (
                <td>
                  {item.inputParameters
                    ? item.inputParameters.map((inputParameter) => {
                        return (
                          <Div className="border border-black p-2">
                            <MarkdownCodeblock
                              text={
                                inputParameter
                                  ? JSON.stringify(inputParameter, undefined, 2)
                                  : "undefined"
                              }
                              extension="json"
                              minimalMode="preview"
                              expandedMode="scroll"
                              isInitiallyExpanded={false}
                            />
                          </Div>
                        );
                      })
                    : "No input"}
                </td>
              );
            },
          },
          {
            name: "Output",
            objectParameterKey: "output",
            customPresentation: (item) => {
              return (
                <td>
                  <MarkdownCodeblock
                    text={
                      item.output
                        ? JSON.stringify(item.output, undefined, 2)
                        : "undefined"
                    }
                    extension="json"
                    minimalMode="preview"
                    expandedMode="scroll"
                    isInitiallyExpanded={false}
                  />
                </td>
              );
            },
          },
          {
            objectParameterKey: "description",
            name: "Info",
            customPresentation: (item) => {
              return (
                <td>
                  {item.description ? (
                    <MarkdownView
                      markdownParse={mdToJsonParse(item.description)}
                      markdownParseRenderConfig={{
                        projectRelativeBaseFolderPath: "",
                        projectRelativeMarkdownFilePath: "",
                      }}
                      view="view"
                    />
                  ) : (
                    <Div />
                  )}
                </td>
              );
            },
          },
          {
            objectParameterKey: "id",
            name: "Actions",
            customPresentation: (item) => {
              const actions: ActionItem[] = [
                // make example

                type !== "example"
                  ? {
                      id: 1,
                      title: "Make example",
                      emoji: "👻",
                      onClick: async () => {
                        withLoading(
                          async () => {
                            const apiResult = await api.upsertDbModel(
                              "FunctionExecution",
                              { ...item, isExample: true }
                            );

                            functionExecutionsQuery.refetch();

                            // console.log({ apiResult });
                          },
                          item.id,
                          1
                        );
                      },
                    }
                  : undefined,

                // make test

                type !== "test"
                  ? {
                      id: 2,
                      title: "Make test",
                      emoji: "🔧",
                      onClick: async () => {
                        withLoading(
                          async () => {
                            const apiResult = await api.upsertDbModel(
                              "FunctionExecution",
                              { ...item, isTest: true }
                            );

                            functionExecutionsQuery.refetch();

                            // console.log({ apiResult });
                          },
                          item.id,
                          2
                        );
                      },
                    }
                  : undefined,

                // delete (tests and examples)
                type !== "recent"
                  ? {
                      id: 3,
                      title: "Remove",
                      emoji: "❌",
                      onClick: async () => {
                        withLoading(
                          async () => {
                            const apiResult = await api.upsertDbModel(
                              "FunctionExecution",
                              {
                                ...item,
                                isExample:
                                  type === "example" ? false : item.isExample,
                                isTest: type === "test" ? false : item.isTest,
                              }
                            );

                            functionExecutionsQuery.refetch();

                            // console.log({ apiResult });
                          },
                          item.id,
                          3
                        );
                      },
                    }
                  : undefined,

                // fill in in form in tab 1
                {
                  id: 4,
                  title: "Use in form",
                  emoji: "📝",
                  onClick: () => {
                    // Go to tab
                    setCurrentTab(1);
                    setExecutionId(item.id);
                    setInitialValues(item.inputParameters);
                  },
                },
                // execute directly
                {
                  id: 5,
                  emoji: "⚡️",
                  title: "Execute",
                  onClick: async () => {
                    withLoading(
                      async () => {
                        const apiFunction = api[
                          tsFunction.name as keyof typeof api
                        ] as undefined | ((...parameters: any[]) => any);

                        const apiResult = await apiFunction?.(
                          ...(item.inputParameters || [])
                        );

                        functionExecutionsQuery.refetch();

                        // console.log({ apiResult });
                      },
                      item.id,
                      5
                    );
                  },
                },
              ].filter(notEmpty);
              return (
                <td>
                  {actions.map((action) => {
                    const isLoading = loading[item.id] === action.id;
                    return (
                      <Button
                        type="button"
                        onClick={action.onClick}
                        className="hover:bg-blue-500  mr-2 rounded-md p-1"
                        textClassName="text-xs hover:text-white flex flex-row"
                      >
                        {isLoading ? <FancyLoader /> : ""}
                        <P>
                          {action.emoji} {action.title}
                        </P>
                      </Button>
                    );
                  })}
                </td>
              );
            },
          },
        ]}
      />
    </>
  );
};
