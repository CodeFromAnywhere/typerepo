import { Div, P } from "react-with-native";
import {
  MarkdownReaderPage,
  MarkdownReaderPageProps,
} from "markdown-reader-types";
import { LayoutGrid } from "layout";
import {
  publicEnvironmentVariables,
  publicLocalEnvironmentVariables,
} from "sdk-env-public";
import { MappedObject } from "js-util";
import { ALink } from "next-a-link";
import { AugmentedWord } from "augmented-word-types";
import { ClickableIcon } from "clickable-icon";
import { useStore } from "../store";

export const Header = (props: {
  publicBundleConfig?: MarkdownReaderPageProps["publicBundleConfig"];
}) => {
  const [isMobileMenuEnabled, setIsMobileMenuEnabled] = useStore(
    "menu.isMobileMenuEnabled"
  );
  const { publicBundleConfig } = props;
  const title =
    publicLocalEnvironmentVariables.markdownReaderTitle ||
    publicEnvironmentVariables.markdownReaderTitle ||
    publicBundleConfig?.name;

  return (
    <Div
      style={{
        backgroundColor: props.publicBundleConfig?.primaryColor,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ALink
        href={
          typeof window !== "undefined"
            ? location.protocol + "//" + location.host
            : "#"
        }
        style={{ fontSize: 32 }}
      >
        {props.publicBundleConfig?.emoji}
      </ALink>

      <Div>
        <P className="font-bold text-white ">{title}</P>
        <P className="text-xs text-white italic">
          {props.publicBundleConfig?.description}
        </P>
      </Div>

      <Div className="flex flex-row">
        <Div className="lg:hidden">
          <ClickableIcon
            emoji="🔍"
            onClick={() => setIsMobileMenuEnabled(!isMobileMenuEnabled)}
          />
        </Div>
        {props.publicBundleConfig?.isGitRepoPublic &&
        props.publicBundleConfig.gitRepoUrl ? (
          <ALink target="_blank" href={props.publicBundleConfig.gitRepoUrl}>
            GitHub
          </ALink>
        ) : null}
      </Div>
    </Div>
  );
};

export const Layout = (props: {
  publicBundleConfig: MarkdownReaderPageProps["publicBundleConfig"];
  pages: MarkdownReaderPage[];
  children: any;
  augmentedWordObject?: MappedObject<AugmentedWord>;
}) => {
  const { pages, children, augmentedWordObject, publicBundleConfig } = props;

  const queryPaths = pages.filter((x) => x.isMenuItem).map((x) => x.queryPath);

  return (
    <LayoutGrid
      menu={{
        augmentedWords: Object.values(augmentedWordObject || {}),
        queryPaths,
        isLoading: false,
      }}
      header={<Header publicBundleConfig={publicBundleConfig} />}
    >
      {children}
    </LayoutGrid>
  );
};
