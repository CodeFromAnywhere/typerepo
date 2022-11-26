import { fs, path } from "fs-util";
import { oneByOne } from "one-by-one";
import { readJsonFile } from "read-json-file";
import { CodespanItemInfo } from "./CodespanItemInfo";
import { findCodestories } from "./findCodestories";
import { makeCodespanMappedObject } from "./makeCodespanMappedObject";
import { makeCodestory } from "./makeCodestory";

/**
 * ---
 * runEveryPeriod: 5-minutes
 * ---
 *
 */
export const writeAllCodestories = async (isDebug?: boolean) => {
  const files = await findCodestories();

  await makeCodespanMappedObject();

  const mappedObject = await readJsonFile<{ [key: string]: CodespanItemInfo }>(
    path.join(__dirname, "..", "assets", "codespan-mapped-object-small.json")
  );

  if (!mappedObject) {
    console.log("Couldn't find mapped obj");
    return;
  }

  const codestoryPaths = await oneByOne(files, (absolutePath) =>
    makeCodestory(absolutePath, mappedObject, isDebug)
  );
  if (isDebug) {
    console.log({ codestoryPaths });
  }
};
