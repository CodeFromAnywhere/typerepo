import { TsConfig } from "code-types";
import { db } from "./db";

const main = async () => {
  const result = await db.update(
    "TsConfig",
    undefined,

    (old) => {
      const newCompilerOptions: TsConfig["compilerOptions"] = {
        ...old.compilerOptions,
        noEmitOnError: true,
      };

      return { ...old, compilerOptions: newCompilerOptions };
    }
  );

  console.log(result);
};

main();
