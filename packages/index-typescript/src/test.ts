import { indexTypescript } from "./indexTypescript";
import { oneByOne } from "one-by-one";
const test = async () => {
  const files = {
    interfaces:
      "/Users/king/King/tools/types/code-types/src/code/TypescriptIndex.ts",
    interfaces2:
      "/Users/king/King/tools/types/code-types/src/code/TsComment.ts",
    interfaces3:
      "/Users/king/King/tools/types/code-types/src/code/TsInterface.ts",
    interfaces4: "/Users/king/King/tools/types/code-types/src/code/TypeInfo.ts",
    interfaces5:
      "/Users/king/King/tools/types/code-types/src/code/TsFunction.ts",
    interfaces6:
      "/Users/king/King/tools/types/foodchain-types/src/FoodChain.ts",
    functions:
      "/Users/king/King/tools/control-fs/explore-project/src/getFolderExplorationDetails.ts",
  };

  const fileReasons = Object.keys(files) as (keyof typeof files)[];
  oneByOne(fileReasons, async (reason) => {
    const filePath = files[reason];

    console.log({ filePath });

    await indexTypescript({ filePaths: [filePath], manualProjectRoot: null });

    return;
  });
};

test();
