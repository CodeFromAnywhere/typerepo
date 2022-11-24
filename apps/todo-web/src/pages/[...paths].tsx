import { useRouter } from "react-with-native-router";
import { UpsertPage, DbPage } from "db-crud";
import { FileWriter, WriterLayout } from "file-writer";
import { ALink } from "next-a-link";
import { Div, P } from "react-with-native";
import { queries } from "api";
import { useStore } from "../store";
/**
 * This should catch all paths that aren't default ones
 */
export default () => {
  const router = useRouter();
  const paths = router.asPath.slice(1).split("?")[0];

  if (paths.startsWith("upsert/")) {
    return <UpsertPage />;
  }

  if (paths === "SelfSprintReview" || paths === "TodoOffer") {
    return <DbPage />;
  }

  if (paths === "stats") {
    // team stats (100% custom)
    return <Div>Coming soon</Div>;
  }

  // writer ui (shape of TodoFile) in /todo/*
  return <FileWriterPage />;
};

const FileWriterPage = () => {
  const router = useRouter();
  const paths = router.asPath.slice(1).split("?")[0];
  const [todoPagesConfig] = useStore("todoPagesConfig");
  const todoPagesQuery = queries.useGetTodoPages(todoPagesConfig);
  const webPages = todoPagesQuery.data?.result?.flat;
  const filePage = webPages?.find((x) => x.queryPath === paths);
  const folderPages = webPages?.filter((x) => x.queryPath.startsWith(paths));

  const projectRelativeFilePath = filePage?.pageData?.projectRelativeFilePath;
  if (!projectRelativeFilePath) {
    if (folderPages?.length) {
      return (
        <Div className="p-4">
          {folderPages.map((item) => {
            return (
              <P className="my-2">
                -{" "}
                <ALink key={item.queryPath} href={item.queryPath}>
                  {item.menuTitle}
                </ALink>
              </P>
            );
          })}
        </Div>
      );
    }
    return <Div>Couldn't find that page</Div>;
  }
  return (
    <WriterLayout>
      <FileWriter
        markdownModelName="TodoFile"
        projectRelativeFilePath={projectRelativeFilePath}
      />
    </WriterLayout>
  );
};
