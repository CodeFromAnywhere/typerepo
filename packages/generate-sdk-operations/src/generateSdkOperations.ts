// global
import { execSync, spawnSync } from "child_process";
// monorepo
import { BundleConfig } from "bundle-types";
import { getProjectRoot } from "get-path";
// relative
import { generateEnvSdks } from "./generateEnvSdks";
import { generateDbSdk } from "./generateDbSdk";
import { generateFunctionSdks } from "./generateFunctionSdks";
import { generateOperationsSdk } from "./generateOperationsSdk";
/**
(re)generates all sdk operations for any project
 */
export const generateSdkOperations = async (
  /**
   * if not provided, will not generate env-sdks
   */
  bundleConfig?: BundleConfig,
  config?: {
    /**
     * If true, will try to run yarn install before and if it fails, does not continue.
     */
    yarnInstallBefore?: boolean;
    /**
     * if true, yarn install will be skipped when generating the sdks, but run one time afterwards
     *
     * useful if you are sure that there will be multiple yarn Installs needed otherwise
     *
     * for os installation (where all operations already exist, don't do this, yarn installs will probably not happen at all)
     */
    yarnInstallAfter?: boolean;
    manualProjectRoot?: string;
    dryrun?: boolean;
  }
): Promise<boolean> => {
  const manualProjectRoot = config?.manualProjectRoot;
  const projectRoot = manualProjectRoot || getProjectRoot();
  const yarnInstallAfter = config?.yarnInstallAfter;
  const yarnInstallBefore = config?.yarnInstallBefore;
  const dryrun = config?.dryrun;

  if (!projectRoot) {
    return false;
  }

  // NB: install this first, otherwise sdk-operations cannot be found
  await generateOperationsSdk({
    manualProjectRoot,
    dryrun,
  });

  await generateDbSdk({
    manualProjectRoot,
    skipYarnInstall: yarnInstallAfter,
    dryrun,
  });

  await generateFunctionSdks({
    manualProjectRoot,
    skipYarnInstall: yarnInstallAfter,
    dryrun,
  });
  if (bundleConfig) {
    await generateEnvSdks(bundleConfig, {
      manualProjectRoot,
      skipYarnInstall: yarnInstallAfter,
      dryrun,
    });
  }

  if (yarnInstallAfter) {
    process.stdout.write(`Installing repo `);
    try {
      const result = execSync("yarn --prefer-offline", {
        cwd: projectRoot,
        encoding: "utf8",
        stdio: "pipe",
      });

      console.log("✅");

      return true;
    } catch (e: any) {
      console.log("❌");
      const error: {
        status: number;
        signal: any;
        output: (string | null)[];
        pid: number;
        stdout: string;
        stderr: string;
      } = e;
      console.log(`Could not install:`, error);

      return false;
    }
  }

  return true;
};
