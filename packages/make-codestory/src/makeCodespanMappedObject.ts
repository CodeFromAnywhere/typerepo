import { db } from "database";
import { getSubsetFromObject, mergeObjectsArray } from "js-util";
import { AugmentedAnyModelType } from "model-types";
import { writeToAssets } from "write-to-assets";
import { addModelName } from "./addModelName";

export const makeCodespanMappedObject = async () => {
  // a mapped object of all TsFunctions, TsInterfaces, Operations
  const tsVariables = await db.get("TsVariable"); // name -> description
  const tsInterfaces = await db.get("TsInterface"); // name -> description + rawText
  const tsFunctions = await db.get("TsFunction"); // name -> description + rawText
  const operations = await db.get("Operation"); // name -> description
  const bundleConfigs = await db.get("BundleConfig"); // slugify(name) -> description / gitRepoUrl

  const modelItemsArrays = [
    tsVariables.map((x) => addModelName(x, "TsVariable")),
    tsInterfaces.map((x) => addModelName(x, "TsInterface")),
    tsFunctions.map((x) => addModelName(x, "TsFunction")),
    operations.map((x) => addModelName(x, "Operation")),
    bundleConfigs.map((x) => addModelName(x, "BundleConfig")),
  ];

  // duplicates will overwrite each other, so let's do the most important ones last
  const mappedObject = mergeObjectsArray(
    modelItemsArrays.flat().map((item) => {
      return {
        [item.name]: getSubsetFromObject(item as AugmentedAnyModelType, [
          "name",
          "slug",
          "id",
          "description",
          "operationName",
          "rawText",
          "gitRepoUrl",
        ]),
      };
    })
  );

  const result = await writeToAssets(
    __filename,
    mappedObject,
    "codespan-mapped-object-small.json",
    true
  );
};
