import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { useSelect } from "react-with-native-select";
import { destructureOptionalObject } from "js-util";

export const DbLayout = (props: { pageProps: any; nextPage: any }) => {
  const [SelectMenu, menuType] = useSelect(
    [
      { label: "🪺 Nested", value: "nested" },
      { label: "⚡️ Operaton-based", value: "operation" },
      { label: "👩‍🌾 Flat", value: "flat" },
    ],
    undefined
  );

  const dbMenuQuery = queries.useGetNestedDatabaseMenu({
    noOperationName: menuType?.value === "flat",
    noOperationPath: menuType?.value !== "nested",
    noSrcRelativeFolder: menuType?.value !== "nested",
    noPrefix: true,
  });

  const { flat, nested } = destructureOptionalObject(dbMenuQuery.data?.result);

  const { nextPage, pageProps } = props;
  return (
    <AuthenticationLayout
      // menu props
      menu={{
        // NB: passionfruit wants this xD just make a layoutconfig in the PublicBundleConfig, or make it editable per user (later)
        menuPosition: "left",
        menuHeader: () => {
          return <SelectMenu />;
        },
        isLoading: dbMenuQuery.isLoading,
        webPagesFlat: flat,
        webPagesNested: nested,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
