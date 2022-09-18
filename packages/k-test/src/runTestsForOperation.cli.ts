import { runTestsForOperation } from "./runTestsForOperation";

const [operationName, manualProjectRoot] = process.argv.slice(2);

runTestsForOperation(operationName, undefined, manualProjectRoot);
