#!/usr/bin/env node

import { generateEnvSdks } from "../generateEnvSdks";
import { db } from "database";
const main = async () => {
  const bundleConfig = (await db.get("BundleConfig"))[0];

  if (!bundleConfig) {
    console.log("DIDNT WORK");
    return;
  }

  const [manualProjectRoot] = process.argv.slice(2);
  await generateEnvSdks(bundleConfig, { manualProjectRoot });
};

main();
