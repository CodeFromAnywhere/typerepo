import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { MarkdownReaderPage } from "bundle-util";
import { MarkdownFile } from "code-types";

export type MainPageProps = {
  /**
   * If markdownfile is null, the page should exist, but the reading of the file failed
   */
  markdownFile?: MarkdownFile | null;
  pages: MarkdownReaderPage[];
  /**
   * Title of the page
   */
  title?: string | null;
};

export type PageOptions = {
  /**
   * should this page be hidden in the root menu? Not hidden by default
   */
  hideFromMenu?: boolean;
  /**
   * What title should be shown as the page title and on the menu? Uses the page filename (capitalized) as a default
   */
  title?: string;
};

export type PageType = {
  component: RWNPage;
  key: string;
  reactNavigationOptions?:
    | NativeStackNavigationOptions
    | ((props: { route: any; navigation: any }) => NativeStackNavigationOptions)
    | undefined;
} & PageOptions;

export type RWNPage = {
  (props?: any): JSX.Element;
  options: PageOptions;
};

/**
 * coming soon! We could ask people to add examples of the usage of their component to automatically generate frontend-docs!
 */

export type ComponentOptions = {
  example?: JSX.Element;
};
export type RWNComponent = {
  (): JSX.Element;
  options: ComponentOptions;
};
