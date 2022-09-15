import { BundleConfig } from "bundle-types";
import { getProjectRoot } from "get-path";
import { newOperationWithFiles, getOperationConfig } from "new-operation";

/**
 * generates sdk-env-public and sdk-env-private
 *
 * returns the paths of the geneated operations
 */
export const generateEnvSdks = async (
  bundleConfig: BundleConfig,
  config?: {
    manualProjectRoot?: string;
    skipYarnInstall?: boolean;
    dryrun?: boolean;
  }
) => {
  const promises = [
    newEnvSdk(bundleConfig, "public", config),
    newEnvSdk(bundleConfig, "private", config),
  ];

  const results = await Promise.all(promises);

  return results;
};

/**

# Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig
 */
export const newEnvSdk = async (
  /**
   * NB: if this is not a bundle, a more general purpose bundle config should be used
   */
  bundleConfig: BundleConfig,
  type: "public" | "private",
  config?: {
    manualProjectRoot?: string;
    skipYarnInstall?: boolean;
    dryrun?: boolean;
  }
): Promise<string | undefined> => {
  // 1. gets env from bundle
  const operationName = `sdk-env-${type}`;
  const description = `Any ${type} environment variables of your full-stack app go here.`;

  const projectRoot = config?.manualProjectRoot || getProjectRoot();
  if (!projectRoot) return;

  const skipYarnInstall = config?.skipYarnInstall;
  const dryrun = config?.dryrun;
  const envVariables = bundleConfig[`${type}EnvironmentVariables`];
  const realEnv =
    envVariables && typeof envVariables === "object" ? envVariables : {};

  // 2. creates [type].ts and [type]-local.ts that adheres a type interface

  const typescriptFileString = `export const ${type}EnvironmentVariables = ${JSON.stringify(
    realEnv,
    null,
    2
  )};`;

  const localComment =
    "Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!";

  const localTypescriptFileString = `import { ${type}EnvironmentVariables } from "./${type}";\n// ${localComment}\nexport const ${type}LocalEnvironmentVariables: Partial<typeof ${type}EnvironmentVariables> = {};`;

  const srcFileContentObject = {
    [`src/${type}-local.ts`]: localTypescriptFileString,
    [`src/${type}.ts`]: typescriptFileString,
  };

  // keep the same operationconfig as the os project, or make a new one if not found
  const operationConfig = await getOperationConfig(operationName, description);

  const operationBasePath = await newOperationWithFiles(
    operationConfig,
    srcFileContentObject,
    { manualProjectRoot: projectRoot, skipYarnInstall, dryrun }
  );
  return operationBasePath;
};
