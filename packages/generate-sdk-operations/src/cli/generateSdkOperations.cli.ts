#!/usr/bin/env node

import { generateSdkOperations } from "../generateSdkOperations";
const [dryrunString] = process.argv.slice(2);

const dryrun = dryrunString ? Boolean(dryrunString) : undefined;
generateSdkOperations(undefined, { dryrun, yarnInstallAfter: true });

if (dryrun) {
  console.log("Check new-operation/assets");
} else {
  console.log("Check generated");
}
