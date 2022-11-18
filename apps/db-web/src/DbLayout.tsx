import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { useState } from "react";

const menuTypes = [
  { type: "operation", emoji: "⚡️" },
  { type: "flat", emoji: "👩‍🌾" },
  { type: "deep", emoji: "💣" },
] as const;

export const DbLayout = (props: { pageProps: any; nextPage: any }) => {
  const [menuType, setMenuType] = useState<string>(menuTypes[0]["type"]);
  const dbMenuQuery = queries.useGetNestedDatabaseMenu({
    noOperationName: menuType === "flat",
    noOperationPath: menuType !== "deep",
    noSrcRelativeFolder: menuType !== "deep",
    noPrefix: true,
  });

  const dbQueryPaths = dbMenuQuery.data?.result as any as string[];

  const { nextPage, pageProps } = props;
  return (
    <AuthenticationLayout
      // menu props
      menu={{
        menuType,
        setMenuType,
        menuTypes,
        queryPaths: dbQueryPaths,
        isLoading: dbMenuQuery.isLoading,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
