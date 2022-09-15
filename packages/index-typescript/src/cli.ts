import { indexTypescript } from "./indexTypescript";

const cli = () => {
  const parameters = process.argv.slice(2);
  const manualProjectRootString = parameters.pop();
  if (!manualProjectRootString) return;

  const manualProjectRoot =
    manualProjectRootString === "null" ? null : manualProjectRootString;

  // NB: last argument has been removed, which should be the manualProjectRoot
  indexTypescript({ filePaths: parameters, manualProjectRoot });
};

cli();
