import { AuthenticationLayout } from "layout";

export const MyLayout = (props: { pageProps: any; nextPage: any }) => {
  const { nextPage, pageProps } = props;
  return (
    <AuthenticationLayout
      // menu props
      menu={{ queryPaths: [] }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
