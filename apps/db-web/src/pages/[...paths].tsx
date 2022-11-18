import { useRouter } from "react-with-native-router";
import { DbPage, UpsertPage } from "db-crud";
import { dbModelKeys } from "sdk-db";
/**
 * This should catch all dbQueryPaths because those aren't default ones
 */

const DbAndUpsert = () => {
  const router = useRouter();
  const paths = router.asPath.slice(1);
  const modelNameWithQuery = paths.split("/").pop()!;
  const modelName = modelNameWithQuery.split("?")[0];
  const modelNames = [...dbModelKeys] as string[];

  if (!modelNames.includes(modelName) || !modelName || modelName === "") {
    return "Please select a model on the right";
  }

  if (paths.startsWith("upsert/")) {
    return <UpsertPage />;
  }

  return <DbPage />;
};

export default DbAndUpsert;
