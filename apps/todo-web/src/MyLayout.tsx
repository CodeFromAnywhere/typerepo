import { queries } from "api";
import { AuthenticationLayout } from "layout";
import { useStore } from "./store";
import { TodoMenuHeader } from "./TodoMenuHeader";

export const MyLayout = (props: { pageProps: any; nextPage: any }) => {
  const { nextPage, pageProps } = props;
  const [todoPagesConfig] = useStore("todoPagesConfig");
  const todoPagesQuery = queries.useGetTodoPages(todoPagesConfig);
  const todoPages = todoPagesQuery.data?.result;

  console.log({ todoPages });
  return (
    <AuthenticationLayout
      // menu props
      menu={{
        webPagesFlat: todoPages?.flat,
        webPagesNested: todoPages?.nested,
        isLoading: todoPagesQuery.isLoading,
        menuHeader: TodoMenuHeader,
      }}
      // other
      nextPage={nextPage}
      pageProps={pageProps}
    />
  );
};
