import {
  CategoryStack,
  DbFileLocation,
  KeyValueMarkdownModelType,
  Storing,
} from "model-types";
import { humanCase } from "convert-case";
import { path } from "fs-util";
import { alterKeyValueMarkdown } from "../alter/alter-functions";
import { upsertKeyValueMarkdown } from "../alter/upsertKeyValueMarkdown";

const categoryStackCalculated: CategoryStack = [];

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

    const slug = "upserted-item";

    const ids = {
      id: slug,
      name: humanCase(slug),
      slug,
    };

    const storingItem: Storing<KeyValueMarkdownModelType> = {
      ...ids,
      comment: "yoyoyo",
      isHeaderCalculated: false,
      value: "you are amazing",
      categoryStackCalculated,
    };

    const result = upsertKeyValueMarkdown(realStoredData, storingItem);
    const { newStoredData, ...rest } = result;
    console.log({ rest });
    return result;
  });
};

test();
