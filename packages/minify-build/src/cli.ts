import { minifyBuild } from "./general";

const [operationName] = process.argv.slice(2);
minifyBuild({ operationName });
