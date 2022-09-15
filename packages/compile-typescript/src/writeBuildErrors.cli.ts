import { writeBuildErrors } from "./writeBuildErrors";

const [operationBasePath, manualProjectRoot] = process.argv.slice(2);

writeBuildErrors(operationBasePath, manualProjectRoot);
