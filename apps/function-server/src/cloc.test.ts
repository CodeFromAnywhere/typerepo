import { db } from "database";
import { mergeObjectsArray, notEmpty, sum } from "js-util";

export const cloc = async () => {
  const operations = await db.get("Operation");
  const locs = mergeObjectsArray(
    operations.map((operation) => ({
      [operation.name]: operation.operation?.sizeIndexed?.codeSize?.lines,
    }))
  );

  console.log({ locs });

  // //   const total = sum(locs);

  //   console.dir(
  //     { opl: operations.length, locsl: locs.length, locs, total },
  //     { maxArrayLength: 9999 }
  //   );
};

cloc();
