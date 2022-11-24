import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { Div, P } from "react-with-native";

export const MyLayout = (props: { pageProps: any; nextPage: any }) => {
  const { nextPage, pageProps } = props;
  const writerWebPagesMenuQuery = queries.useGetWriterWebPagesMenu();

  const menu = writerWebPagesMenuQuery.data?.result;
  return (
    <AuthenticationLayout
      // menu props
      menu={{
        menuHeader: () => {
          return (
            <Div>
              <P>
                Filters: filetype (select-multiple), recently edited, recently
                created, author
              </P>
              <P>
                Other: In search-mode, by default show the 100 most recent,
                sorted on recency
              </P>
            </Div>
          );
        },
        isLoading: writerWebPagesMenuQuery.isLoading,
        webPagesFlat: menu?.flat,
        webPagesNested: menu?.nested,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
