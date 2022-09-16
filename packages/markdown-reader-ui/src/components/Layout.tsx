import { Div, Span } from "react-with-native";
import {
  NestedMenu,
  queryPathsArrayToNestedPathObject,
  nestedPathObjectToNestedMenuRecursive,
  MenuItemType,
  MenuType,
} from "nested-menu";
import { MarkdownReaderPage } from "bundle-util";

export const Layout = ({
  pages,
  children,
}: {
  pages: MarkdownReaderPage[];
  children: any;
}) => {
  const queryPaths = pages.filter((x) => x.isMenuItem).map((x) => x.queryPath);
  const nestedPathObject = queryPathsArrayToNestedPathObject(queryPaths);
  const menu = nestedPathObjectToNestedMenuRecursive(nestedPathObject);

  return (
    <Div className="h-screen grid grid-rows-6">
      <Div className="row-span-6 grid grid-cols-5">
        <Div
          className={`
        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
          textClassName="dark:text-white"
        >
          {children}
        </Div>
        <Span className="border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
          {menu ? (
            <NestedMenu menu={menu} headersClickable={true} />
          ) : (
            "Menu couldn't be found"
          )}
        </Span>
      </Div>
    </Div>
  );
};
