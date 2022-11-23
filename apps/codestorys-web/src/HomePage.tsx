import { MarkdownReaderPageProps } from "markdown-reader-types";
import { Div, P } from "react-with-native";
import { ALink } from "next-a-link";
export const HomePage = (props: MarkdownReaderPageProps) => {
  return (
    <Div>
      {props.menu.flat.map((x) => {
        return (
          <ALink key={x.queryPath} href={x.queryPath}>
            <Div className="text-3xl bg-blue-200 m-2 rounded-md p-4">
              {x.menuTitle}
            </Div>

            {/* <P>{x.pageData.shortDescription}</P> */}
          </ALink>
        );
      })}
    </Div>
  );
};
