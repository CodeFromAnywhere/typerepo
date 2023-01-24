import { FunctionPage } from "../../components/function-web/FunctionPage";
import { queries } from "api";
import { AuthenticationLayout } from "layout";

export const FunctionLayout = () => {
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
      nextPage={FunctionPage}
      pageProps={{}}
    />
  );
};

/**
 * This should catch all paths that aren't default ones
 */
export default FunctionLayout;
