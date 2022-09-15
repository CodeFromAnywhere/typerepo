import { getObjectFromParamsString } from "js-util";
import { testDb } from "../test-db";

export const upsertCli = async () => {
  const [modelName, dataString] = process.argv.slice(2);

  /**
   FOR kvmd type:

   - required: name
   - optional: parent_xxxSlug, value, comment
   */
  if (!dataString || !modelName) {
    console.log("please choose a model and data");
  }

  const theObject = getObjectFromParamsString(dataString);
  //@ts-ignore
  const result = await testDb.upsert(modelName as any, theObject);

  console.table(result);
};

upsertCli();
