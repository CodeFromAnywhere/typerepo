import { testDb } from "../test-db";

export const removeCli = async () => {
  const [model, key, value] = process.argv.slice(2);

  if (!value || !model || !key) {
    console.log("please provide a modelName and a key + value to remove");
    return;
  }

  const result = await testDb.remove(
    model as any,
    (content) => content[key] == value
  );

  console.table(result);
};

removeCli();
