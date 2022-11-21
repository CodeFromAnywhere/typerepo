import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { useState } from "react";
import { Div } from "react-with-native";
import { ClickableIcon } from "clickable-icon";
import { destructureOptionalObject } from "js-util";
const menuTypes = [
  { type: "deep", emoji: "💣" },
  { type: "operation", emoji: "⚡️" },
  { type: "flat", emoji: "👩‍🌾" },
] as const;

export const DbLayout = (props: { pageProps: any; nextPage: any }) => {
  const [menuType, setMenuType] = useState<string>(menuTypes[0]["type"]);
  const dbMenuQuery = queries.useGetNestedDatabaseMenu({
    noOperationName: menuType === "flat",
    noOperationPath: menuType !== "deep",
    noSrcRelativeFolder: menuType !== "deep",
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
          return (
            <Div className="flex flex-row gap gap-2">
              {menuTypes?.map((item, index) => {
                return (
                  <Div
                    key={item.type}
                    className={`${
                      item.type === menuType
                        ? "bg-gray-200 dark:bg-gray-800 rounded-full"
                        : undefined
                    } w-7 h-7 flex justify-center items-center`}
                  >
                    <ClickableIcon
                      onClick={() => setMenuType(item.type)}
                      emoji={item.emoji}
                    />
                  </Div>
                );
              })}
            </Div>
          );
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
