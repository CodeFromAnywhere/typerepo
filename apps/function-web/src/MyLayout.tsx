import { queries } from "api";
import { AuthenticationLayout } from "layout";

export const MyLayout = (props: { pageProps: any; nextPage: any }) => {
  const { nextPage, pageProps } = props;

  const queryPathsQuery = queries.useGetFunctionQueryPaths();

  return (
    <AuthenticationLayout
      // menu props
      menu={{
        queryPaths: queryPathsQuery.data?.result,
        isLoading: queryPathsQuery.isLoading,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
