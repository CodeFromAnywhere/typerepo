import { db } from "database";

export const test = async () => {
  const functionssss = await db.get("TsFunction", {
    operationName: "whatever",
  });
  //
  console.log("hello", { functionssss });
};

test();
