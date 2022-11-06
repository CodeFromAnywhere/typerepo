import { useState } from "react";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { ColumnType, Table } from "react-with-native-table";
import { notEmpty, sum } from "js-util";
import { humanCase } from "convert-case";
import { getProperties, SchemaProperty } from "schema-util";
import { LabeledButton } from "labeled-button";
import { useAlert } from "react-with-native-alert";
import { getReferenceParameterInfo } from "schema-util";
import { FancyLoader } from "fancy-loader";
import { api } from "api";
import { useGetDbModelQuery } from "../hooks/useGetDbModelQuery";
import { DbModelEnum } from "sdk-db";
import { isCalculatedParameter } from "name-conventions";
import { useReferencableModelDataQuery } from "../hooks/useReferenceModelQuery";
const { deleteDbModel } = api;

export const getDataParameterNames = (properties: SchemaProperty[]) => {
  const dataParameterNames = properties
    .map((property) => {
      const { dataParameterName } = getReferenceParameterInfo(property.name);

      return dataParameterName;
    })
    .filter(notEmpty);

  return dataParameterNames;
};

/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
export const ModelComponent = ({
  modelName,
  highlight,
}: {
  modelName?: string;
  highlight: {
    slug?: string;
    id?: string;
  };
}) => {
  const model = useGetDbModelQuery(modelName as DbModelEnum);
  const modelReferences = useReferencableModelDataQuery(
    modelName as DbModelEnum
  );

  const isLoading = model.isLoading || model.isRefetching || model.isFetching;

  const [showModelKeys, setShowModelKeys] = useState(false);

  const alert = useAlert();
  const router = useRouter();

  const index = model.data?.pages[0].result?.index;
  const properties = getProperties(index?.type?.typeDefinition);
  const dataParameterNames = getDataParameterNames(properties);
  const withOrWithoutModelKeys = (column: ColumnType<any>) =>
    showModelKeys || !isCalculatedParameter(String(column.objectParameterKey));
  const columns: ColumnType<any>[] = properties
    .filter((property) => !dataParameterNames.includes(property.name))
    .map((property) => {
      const referenceParameterInfo = getReferenceParameterInfo(property.name);
      const {
        descriptor,
        interfaceName,
        isReferenceMultipleParameter,
        isReferenceParameter,
        isReferenceSingleParameter,
      } = referenceParameterInfo;

      const presentationType = isReferenceSingleParameter
        ? "referenceSingle"
        : isReferenceMultipleParameter
        ? "referenceMultiple"
        : "text";

      const name =
        isReferenceParameter && interfaceName
          ? descriptor
            ? humanCase(`${descriptor}-${interfaceName}`)
            : humanCase(interfaceName)
          : humanCase(property.name);

      const column: ColumnType<any> = {
        name,
        objectParameterKey: property.name,
        presentationType,
      };
      return column;
    })
    .filter(notEmpty)
    .filter(withOrWithoutModelKeys);

  const allData = model?.data?.pages
    .map((x) => x.result?.data)
    .flat()
    .filter(notEmpty);
  const count = sum(
    model.data?.pages.map((x) => x.result?.data.length || 0) || []
  );
  return (
    <Div>
      <Div className="px-8 lg:px-20 py-4">
        <Div className="flex flew-row justify-between pb-4">
          {isLoading ? (
            <Div />
          ) : (
            <Div>
              <P className="font-bold">
                {index?.name || "Couldn't find index"}
              </P>
              <P>{index?.description}</P>
            </Div>
          )}

          <Div className="flex flex-row">
            <LabeledButton
              onClick={() => router.push(`/upsert?model=${modelName}`)}
              title="New"
              emoji="➕"
            />

            <LabeledButton
              {...{
                onClick: () => model.refetch(),
                title: "Reload",
                emoji: isLoading ? undefined : "🔄",
                component: isLoading ? () => <FancyLoader medium /> : undefined,
              }}
            />

            <LabeledButton
              {...{
                onClick: () => setShowModelKeys(!showModelKeys),
                title: "Show all",
                emoji: showModelKeys ? "🔓" : "🔒",
              }}
            />
          </Div>
        </Div>

        {isLoading
          ? null
          : count === 0
          ? "No entries loaded"
          : `${count} entries loaded`}
      </Div>
      {/* NB: here a table view should be rendered */}
      {Array.isArray(allData) && allData.length > 0 ? (
        <Table
          data={allData}
          onEndReached={() => {
            const pages = model.data?.pages;

            const lastPage = pages ? pages[pages.length - 1] : undefined;

            const hasMore = lastPage?.result?.hasMore;

            if (hasMore && !model.isFetchingNextPage) {
              model.fetchNextPage();
            }
          }}
          shouldHighlightItem={(item: any) =>
            !!(
              (highlight.id && item.id === highlight.id) ||
              (highlight.slug && item.slug === highlight.slug)
            )
          }
          columns={columns}
          renderExtraColumns={(item) => {
            return (
              <Div className="flex flex-row">
                <LabeledButton
                  {...{
                    onClick: () =>
                      router.push(`/upsert?model=${modelName}&id=${item?.id}`),
                    title: "Update",
                    emoji: "✏️",
                    size: "small",
                  }}
                />
                <LabeledButton
                  {...{
                    size: "small",
                    onClick: () => {
                      alert?.(
                        "Are you sure?",
                        "Do you want to delete this one?",
                        [
                          {
                            text: "Yes",
                            style: "destructive",
                            onPress: () => {
                              if (item?.id) {
                                deleteDbModel(modelName as any, item.id).then(
                                  (result) => {
                                    model.refetch();
                                    modelReferences.refetch();
                                  }
                                );
                              }
                            },
                          },
                          { text: "Cancel", style: "cancel" },
                        ]
                      );
                    },
                    title: "Delete",
                    emoji: "❌",
                  }}
                />
              </Div>
            );
          }}
          extraColumnsAtStart
        />
      ) : null}
    </Div>
  );
};
