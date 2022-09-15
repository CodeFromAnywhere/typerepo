import { Div, P } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { Layout } from "../components/Layout";
import { renderMarkdownParse } from "markdown-parse-transpile-ui";
import { MainPageProps, RWNPage } from "../types";
import { useRouter } from "react-with-native-router";
import { getQueryPath } from "../util/getQueryPath";

const Page: RWNPage = (props: MainPageProps) => {
  const router = useRouter();
  const queryPath = getQueryPath(router.query);

  return (
    <Layout pages={props.pages}>
      <Div className="pb-4 px-4 w-full" scroll>
        {props.markdownFile ? (
          renderMarkdownParse(mdToJsonParse(props.markdownFile.markdown))
        ) : (
          <P>Markdown not found ({queryPath})</P>
        )}
      </Div>
    </Layout>
  );
};

Page.options = {};

export default Page;
