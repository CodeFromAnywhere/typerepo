import { db } from "./db";

const main = async () => {
  const result = await db.update(
    "PackageJson",
    undefined,

    (old) => {
      if (!old.scripts) {
        return old;
      }

      delete old.scripts.minify;
      delete old.scripts.minify2;

      const newScripts = old.scripts;

      return { ...old, scripts: newScripts };
    }
  );

  console.log(result);
};

main();
