import { GetStaticProps } from "next";
import { takeFirst } from "js-util";
import { fs, path } from "fs-util";
import { operations } from "sdk-operations";
import { db } from "database";
import { getAllSearchResults } from "./getAllSearchResults";
import { QueryPageProps } from "./types";

export const searchGetStaticProps: GetStaticProps<QueryPageProps> = async (
  context
) => {
  const query = takeFirst(context.params?.query) || null;

  const imagePaths = await fs.readdir(
    path.join(__dirname, "../../..", "public")
  );
  const searchResults = getAllSearchResults(query) || null;

  const timelineItems: {
    comment: string;
    filePath: string | undefined;
    line: number;
  }[] = []; // = await getTimelineItems();

  const props: QueryPageProps = {
    query,
    searchResults,
    imagePaths,
    timelineItems,
  };

  return {
    props,
  };
};

export const getTimelineItems = async () => {
  const comments = await db.get("TsComment");

  const items = comments
    .filter((x) => x.types.includes("todo"))
    .map((x) => {
      const isMultiLine = x.firstLine !== x.lastLine;

      const operationPath =
        operations[x.operationName as keyof typeof operations];

      const comment = isMultiLine
        ? `/**\n${x.comment}\n*/\n\n${x.rawStatement}`
        : `// ${x.comment} \n ${x.rawStatement}`;

      const filePath = operationPath
        ? path.join(operationPath, x.operationRelativeTypescriptFilePath)
        : undefined;
      return {
        comment,
        filePath,
        line: x.firstLine,
      };
    });

  return items;
};
