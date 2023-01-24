import { queries } from "api";
import { AuthenticationLayout } from "layout";

export const FunctionLayout = (props: { pageProps: any; nextPage: any }) => {
  const { nextPage, pageProps } = props;

  const queryPathsQuery = queries.useGetFunctionQueryPaths();
  const menu = queryPathsQuery.data?.result;
  return (
    <AuthenticationLayout
      // menu props
      menu={{
        isLoading: queryPathsQuery.isLoading,
        webPagesFlat: menu?.flat,
        webPagesNested: menu?.nested,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
