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

  if (paths.startsWith("db/upsert/")) {
    return <UpsertPage />;
  }

  return <DbPage />;
};

import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { useSelect } from "react-with-native-select";
import { destructureOptionalObject } from "js-util";

export const DbLayout = () => {
  const items = [
    { label: "🪺 Nested", value: "nested" },
    { label: "⚡️ Operaton-based", value: "operation" },
    { label: "👩‍🌾 Flat", value: "flat" },
  ];
  const [SelectMenu, menuType] = useSelect(items, items[0]);

  const dbMenuQuery = queries.useGetNestedDatabaseMenu({
    noOperationName: menuType?.value === "flat",
    noOperationPath: menuType?.value !== "nested",
    noSrcRelativeFolder: menuType?.value !== "nested",
    noPrefix: true,
  });

  const { flat, nested } = destructureOptionalObject(dbMenuQuery.data?.result);

  return (
    <AuthenticationLayout
      // menu props
      menu={{
        // NB: passionfruit wants this xD just make a layoutconfig in the PublicBundleConfig, or make it editable per user (later)
        // menuPosition: "left",
        menuHeader: () => {
          return <SelectMenu />;
        },
        isLoading: dbMenuQuery.isLoading,
        webPagesFlat: flat,
        webPagesNested: nested,
      }}
      // other
      nextPage={DbAndUpsert}
      pageProps={{}}
    />
  );
};

export default DbLayout;
