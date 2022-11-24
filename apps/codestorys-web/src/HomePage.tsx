import { MarkdownReaderPageProps } from "markdown-reader-types";
import { Div, P } from "react-with-native";
import { ALink } from "next-a-link";
import { Layout } from "./Layout";
import { AssetView } from "asset-view";
export const HomePage = (props: MarkdownReaderPageProps) => {
  return (
    <Layout>
      <Div className="flex flex-col px-2 my-5 gap-y-5 gap">
        <P className="text-2xl">What's a codestory?</P>
        <P>
          It's a story about my coding session, where I mention my observations,
          my ideas, thought processes, choices, implementation details, and
          results.
        </P>
        <P>Enjoy!</P>
      </Div>
      <Div className="flex flex-row flex-wrap">
        {props.menu.flat.map((x) => {
          return (
            <ALink key={x.queryPath} href={x.queryPath}>
              <Div className="w-80 bg-yellow-500 hover:bg-yellow-300 m-2 rounded-md p-4">
                {x.pageData.imagePath ? (
                  <AssetView
                    projectRelativeReferencingFilePath={
                      x.pageData.projectRelativeFilePath
                    }
                    className="h-40 object-cover w-80"
                    hideDownloadLink
                    asset={{
                      projectRelativeReferencingFilePath:
                        x.pageData.projectRelativeFilePath,
                      relativePath: x.pageData.imagePath,
                    }}
                  />
                ) : null}
                <P className="text-3xl">{x.menuTitle}</P>
              </Div>
            </ALink>
          );
        })}
      </Div>
    </Layout>
  );
};
