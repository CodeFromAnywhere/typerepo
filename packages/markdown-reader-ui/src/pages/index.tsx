import { Div, P } from "react-with-native";
import { mdToJsonParse } from "markdown-parse-js";
import { Layout } from "../components/Layout";
import { renderMarkdownParse } from "markdown-parse-transpile-ui";
import { MainPageProps, RWNPage } from "../types";
import { useRouter } from "react-with-native-router";
import { getQueryPath } from "../util/getQueryPath";
import { ALink } from "next-a-link";
import { ClickableIcon } from "clickable-icon";
import { MarkdownReaderPage } from "bundle-util";

export const addInternalLinks = (
  markdownString: string | undefined,
  internalLinks: MarkdownReaderPage[]
) => {
  if (!markdownString) return;

  const words = markdownString.split(" ");

  const newWords = words.map((word) => {
    const found = internalLinks.find((x) => x.internalLinkWord === word);
    if (!found) return word;
    return `[${word}](/${found.queryPath})`;
  });

  const newMarkdownString = newWords.join(" ");

  return newMarkdownString;
};

const Page: RWNPage = (props: MainPageProps) => {
  const router = useRouter();
  const queryPath = getQueryPath(router.query);

  const internalLinks = props.pages.filter((x) => !!x.internalLinkWord);
  const internallyLinkedMarkdown = addInternalLinks(
    props.markdownFile?.markdown,
    internalLinks
  );

  const renderBottomNavigation = () => {
    return (
      <Div className="flex flex-row w-full justify-between">
        {props.previousQueryPath ? (
          <ALink href={`${props.previousQueryPath}`}>
            <Div className="w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
              <P className="font-bold text-xl">
                {props.previousQueryPath.split("/").pop()}
              </P>
              <P className="font-bold text-6xl">⬅</P>
            </Div>
          </ALink>
        ) : (
          <Div />
        )}

        {props.nextQueryPath ? (
          <ALink href={`${props.nextQueryPath}`}>
            <Div className="w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center">
              <P className="font-bold text-xl">
                {props.nextQueryPath.split("/").pop()}
              </P>
              <P className="font-bold text-6xl">➡</P>
            </Div>
          </ALink>
        ) : (
          <Div />
        )}
      </Div>
    );
  };

  const renderPage = () => {
    return (
      <Div>
        {queryPath.length > 1 ? (
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
        ) : null}

        {internallyLinkedMarkdown
          ? renderMarkdownParse(mdToJsonParse(internallyLinkedMarkdown))
          : null}

        {props.previousQueryPath || props.nextQueryPath
          ? renderBottomNavigation()
          : null}
      </Div>
    );
  };

  const renderNav = () => {
    return (
      <Div>
        <Div className="flex flex-row items-center">
          <ClickableIcon
            emoji="⬅"
            onClick={() => {
              const parts = queryPath.split("/");
              parts.pop();
              const oneFolderUp = parts.join("/");
              router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
            }}
          />
          <P className="text-4xl">&nbsp;&nbsp;{props.title}</P>
        </Div>

        <Div className="flex flex-row flex-wrap">
          {props.children?.map((child) => {
            return (
              <ALink href={`${queryPath}/${child}`}>
                <Div className="w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex justify-center items-center">
                  <P className="font-bold text-xl">{child}</P>
                </Div>
              </ALink>
            );
          })}
        </Div>
      </Div>
    );
  };
  return (
    <Layout pages={props.pages}>
      <Div className="pb-4 px-4 w-full" scroll>
        {props.children ? renderNav() : renderPage()}
      </Div>
    </Layout>
  );
};

Page.options = {};

export default Page;
