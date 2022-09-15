import { getObjectFromParamsString, getSubsetFromObject } from "js-util";
import { DbModels } from "sdk-db";
import { db } from "../db";

export const getCli = async () => {
  const [model, configString, keysString] = process.argv.slice(2);
  const config = configString
    ? getObjectFromParamsString(configString)
    : undefined;
  const keys = keysString
    ? keysString.split(",").map((x) => x.trim())
    : undefined;

  const result = await db.get(model as keyof DbModels, config);

  console.table(
    result.map((x) =>
      // @ts-ignore
      keys && typeof x === "object" ? getSubsetFromObject(x, keys) : x
    )
  );
};

getCli();
