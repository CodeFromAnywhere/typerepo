import { FileWriter, WriterLayout } from "file-writer";
import { useRouter } from "react-with-native-router";

// You can put anything here
export default () => {
  const router = useRouter();
  const queryPath = router.asPath.slice(1).split("?")[0]?.split("#")[0];

  return (
    <WriterLayout>
      <FileWriter
        projectRelativeFilePath={queryPath}
        markdownModelName="WebMarkdownFile"
      />
    </WriterLayout>
  );
};
