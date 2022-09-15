import { testDb } from "../test-db";

export const updateCli = async () => {
  const [model, filterKv, updateKv] = process.argv.slice(2);

  if (!filterKv || !model || !updateKv) {
    console.log(
      "please provide 3 arguments: the model name, the key:value of the instance(s) to update, and the key:value of the key to change the value of"
    );
  }

  const [filterKey, filterValue] = filterKv.split(":");
  const [updateKey, updateValue] = updateKv.split(":");

  const result = await testDb.update(
    model as any,
    (content) => content[filterKey] == filterValue,
    (content) => ({ ...content, [updateKey]: updateValue })
  );

  console.table(result);
};

updateCli();
