import {
  DbFileLocation,
  KeyValueMarkdownModelType,
  Storing,
} from "model-types";
import { path } from "fs-util";
import { alterKeyValueMarkdown } from "../alter/alter-functions";
import { removeKeyValueMarkdown } from "../alter/removeKeyValueMarkdown";

const test = () => {
  const absolutePath = path.join(__dirname, "../..", "assets", "test.md");
  const dbFileLocation: DbFileLocation = {
    absolutePath,
    modelName: "Test",
    operationName: "fs-orm",
    projectRelativePath: absolutePath,
    operationRelativePath: absolutePath,
  };

  alterKeyValueMarkdown(dbFileLocation, (storedData) => {
    const realStoredData = storedData as Storing<KeyValueMarkdownModelType>[];

    const result = removeKeyValueMarkdown(realStoredData, "toremove");
    const { newStoredData, ...rest } = result;
    console.log({ rest });
    return result;
  });
};

test();
