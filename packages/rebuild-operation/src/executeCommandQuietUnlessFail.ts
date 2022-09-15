import { execSync, spawnSync } from "child_process";

/**
 * Executes a command without showing the result, unless the command fails, then it will log the output.,
 */
export const executeCommandQuietUnlessFail = (config: {
  command: string;
  cwd?: string;
  /**
   * if given, will show what is happening and a checkmark if it succeeds
   */
  description?: string;
}): boolean => {
  const { command, cwd, description } = config;
  if (description) {
    process.stdout.write(`${description} `);
  }

  try {
    const result = execSync(command, {
      cwd,
      encoding: "utf8",
      stdio: "pipe",
    });

    if (description) console.log("✅");

    return true;
  } catch (e: any) {
    if (description) console.log("❌");
    const error: {
      status: number;
      signal: any;
      output: (string | null)[];
      pid: number;
      stdout: string;
      stderr: string;
    } = e;
    console.log(`${command} went wrong:`, error?.stdout);

    return false;
  }
};
