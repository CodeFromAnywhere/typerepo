import { Div } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { mapValuesSync, notEmpty, takeFirst } from "js-util";
import { RWNPage } from "../types";
import { useGetDbModelQuery } from "../hooks/useGetDbModelQuery";
import { useUrl } from "../hooks/useUrl";
import { DbModelEnum, DbModels } from "sdk-db";
import { UpsertForm } from "../components/UpsertForm";
import { AugmentedAnyModelType } from "model-types";
import { getReferencableModels } from "schema-util";

export type UpsertProps = { dbModelNames: (keyof DbModels)[] | null };

const Page: RWNPage<UpsertProps> = (props: UpsertProps) => {
  const router = useRouter();

  const [modelQuery] = useUrl("model");

  const query = mapValuesSync(router.query, (value) => takeFirst(value));
  const model = useGetDbModelQuery(modelQuery as DbModelEnum);

  const allItems = model?.data?.pages
    ?.map((x) => x.result?.data)
    .flat()
    .filter(notEmpty) as AugmentedAnyModelType[];
  const instance = allItems?.find((x) => x.id === query.id);
  const index = model?.data?.pages[0]?.result?.index;

  // NB: this is quite ugly, it's obviously not always the same location for every item... yet this is the best I can do for now, I guess...
  const fileLocations = model?.data?.pages[0]?.result?.fileLocations;

  const projectRelativeStorageFilePath =
    instance?.projectRelativePath || fileLocations?.[0] || "";

  const simplifiedSchema = index?.type?.simplifiedSchema;
  const referencableModelNames = getReferencableModels(simplifiedSchema)
    ?.map((x) => x.interfaceName)
    .filter(notEmpty);

  return (
    <Div scroll className="py-4 px-8 lg:px-20">
      {model.isLoading || !simplifiedSchema ? null : (
        <UpsertForm
          projectRelativeStorageFilePath={projectRelativeStorageFilePath}
          simplifiedSchema={simplifiedSchema}
          instance={instance}
          referencableModelNames={referencableModelNames}
        />
      )}
    </Div>
  );
};

Page.options = {};

export default Page;
