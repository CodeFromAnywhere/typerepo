import { useState } from "react";
import { Div, P, Span } from "react-with-native";
import {
  SimplifiedSchemaForm,
  FormContainer,
  RenderableFunctionParameter,
  useReferencableModelData,
} from "simplified-schema-form";
import { useRouter } from "react-with-native-router";
import { SimplifiedSchema } from "code-types";
import { generateId } from "model-types";
import { SimplifiedSchemaFormDebug } from "../components/SimplifiedSchemaFormDebug";
import { useGetDbModelQuery } from "../hooks/useGetDbModelQuery";
import { ClickableIcon } from "clickable-icon";
import { useUrl } from "../hooks/useUrl";
import { DbModelEnum } from "sdk-db";
import { useAlert } from "react-with-native-alert";
import { api, queries } from "api";
import { IndexInstanceContainer } from "./IndexInstanceContainer";
import { humanCase } from "convert-case";
import { LabeledButtonType } from "labeled-button";

const { upsertDbModel } = api;
/**
TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`
*/

export const UpsertForm = (props: {
  /**
   * the schema for the model we want to update/create
   */
  simplifiedSchema: SimplifiedSchema;
  /**
   * an instance, if it's an update form
   */
  instance: any;
  /**
   * NB: this thing will make hooks appear, so it must be constant!
   */
  referencableModelNames?: string[];
  /**
   * Where is the file stored that this form is for? needed for rendering images and uploading images in writer-input
   */
  projectRelativeStorageFilePath: string;
}) => {
  const {
    instance,
    simplifiedSchema,
    referencableModelNames,
    projectRelativeStorageFilePath,
  } = props;
  const [modelQuery] = useUrl("model");
  const router = useRouter();
  const alert = useAlert();
  const [debug, setDebug] = useState(false);
  const [id] = useState<string>(generateId());
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState<any>(instance);
  const [result, setResult] = useState<any>();
  const model = useGetDbModelQuery(modelQuery as DbModelEnum);
  // NB: all items that this model has can be referenced to in other forms also need to refresh

  const getReferencableModelDataQuery = queries.useGetReferencableModelData(
    modelQuery as DbModelEnum
  );

  const referencableModelData = useReferencableModelData(simplifiedSchema);

  const parameters: RenderableFunctionParameter[] = [
    {
      name: "",
      required: true,
      simplifiedSchema,
      renderButtons: () => <Span />,
      isDbModel: true,
    },
  ];
  const values = [body];

  const onSubmitForm = () => {
    if (!modelQuery) return;

    setLoading(true);

    upsertDbModel(modelQuery as any, body)
      .then(async (result) => {
        if (!result.result?.isSuccesful) {
          // If the upsert fails for some reason, this should be made clear
          alert?.("Error", result.result?.message || result.message);
          setLoading(false);
        } else {
          // NB: we are not waiting for this, we're going back immediately, assuming that there will be loading indicators
          getReferencableModelDataQuery.refetch();
          model.refetch();

          setLoading(false);
          router.back();
        }
      })
      .catch((e) => {
        setLoading(false);
        setResult(e);
      });
  };

  const explainButton = {
    onClick: () => {
      setDebug(!debug);
    },
    title: "Explain",
    emoji: "🧐",
  };

  const buttons: LabeledButtonType[] = [explainButton];

  // console.log({ referencableModelData });
  return (
    <Div>
      <IndexInstanceContainer
        buttons={buttons}
        title={humanCase(modelQuery || "")}
      >
        {simplifiedSchema ? (
          <Div>
            <FormContainer onSubmit={onSubmitForm} isLoading={loading}>
              <SimplifiedSchemaForm
                itemNameOrId={body?.name || body?.id}
                parameterNameStack={undefined}
                projectRelativeStorageFilePath={projectRelativeStorageFilePath}
                id={id}
                parameters={parameters}
                values={values}
                onChange={(values) => setBody(values[0])}
                referencableModelData={referencableModelData}
                isDebug={debug}
              />
            </FormContainer>
            <Div className="mt-6">
              <ClickableIcon emoji="❌ Go back" onClick={() => router.back()} />
            </Div>
            {result ? <P>{JSON.stringify(result)}</P> : null}
            {debug ? (
              <SimplifiedSchemaFormDebug
                parameters={parameters}
                values={values}
              />
            ) : null}
          </Div>
        ) : null}
      </IndexInstanceContainer>
    </Div>
  );
};
