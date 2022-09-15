import { AnyModelType, Creation } from "model-types";
import { testDb, TestModels } from "./test-db";

/**
  NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it
   */
export const runModelEndToEndTest = async (
  modelName: keyof TestModels,
  generateInstance: () => Creation<AnyModelType>
) => {
  /**
   * this is done synchronously for every model: set, get, push, get, remove, get, update, get, get, remove all, get
   */

  const firstInstance = generateInstance();
  const firstId = firstInstance.id;

  console.log({ firstId, firstInstance });

  //@ts-ignore
  const setResult = await testDb.set(modelName, [firstInstance]);
  const getResult = await testDb.get(modelName);

  if (getResult.length !== 1) {
    console.log({ setResult, getResult });
    console.log("Invalid length");
    process.exit(1);
  } else {
    console.log(`${modelName} Set test passed`);
  }

  // @ts-ignore
  const pushResult = await testDb.push(modelName, generateInstance());
  const getResult2 = await testDb.get(modelName);

  if (getResult2.length !== 2) {
    console.log({ pushResult, getResult2 });
    console.log("Invalid length");
    process.exit(1);
  } else {
    console.log(`${modelName} Push test passed`);
  }

  // NB: now we have 2 items in the db

  const removeResult = await testDb.remove(
    modelName,
    // NB: we don't remove first Id
    (content) => content.id !== firstId
  );

  if (removeResult.amountRemoved !== 1) {
    console.log({ removeResult });

    console.log("Invalid amount removed");
    process.exit(1);
  } else {
    console.log(`${modelName} Remove test: correct amount removed`);
  }

  const getResult3 = await testDb.get(modelName);

  if (getResult3.length !== 1) {
    console.log({ getResult3 });

    console.log("Invalid length");
    process.exit(1);
  } else {
    console.log(`${modelName} Remove test passed`);
  }

  // now we have 1 item in the db

  const updateResult = await testDb.update(
    modelName,
    (content) => content.id === firstId,
    (content) => {
      return { ...content, id: "NEWIDDDD" };
    }
  );

  if (updateResult.amountUpdated !== 1) {
    console.log({ updateResult });

    console.log("Invalid rows updated", { firstId });
    process.exit(1);
  } else {
    console.log(`${modelName} Update test: right amount of rows updated`);
  }

  const getResult4 = await testDb.get(modelName);

  if (getResult4[0].id !== "NEWIDDDD") {
    console.log({ firstItem: getResult4[0] }, "id != NEWIDDDD");
    process.exit(1);
  } else {
    console.log(`${modelName} Update test passed`);
  }

  if (getResult4.length !== 1) {
    console.log({ getResult4 });

    console.log("Invalid length");
    process.exit(1);
  }

  console.log(`Test Succeeded for ${modelName}`);

  return true;
};
