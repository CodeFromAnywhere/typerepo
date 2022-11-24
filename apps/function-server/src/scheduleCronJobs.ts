import { oneByOne } from "one-by-one";
import { log } from "log";
import { sdk } from "sdk-api";
import { schedule } from "node-cron";
import { RunEveryPeriodEnum, TsFunction } from "code-types";
import { getObjectKeysArray } from "js-util";
import { db } from "database";

/**
 * NB: cron functions cannot have parameters
 */
export const executeCronFunction = async (tsFunction: TsFunction) => {
  if (
    tsFunction.parameters &&
    tsFunction.parameters.length > 0 &&
    tsFunction.parameters.find((x) => x.required)
  ) {
    log("CRON Functions cannot have required parameters", { type: "error" });
    process.exit();
  }

  //@ts-ignore
  sdk[tsFunction.name]?.();
};

/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
export const scheduleObject: { [interval in RunEveryPeriodEnum]: string } = {
  minute: "* * * * *",
  "5-minutes": "0,5,10,15,20,25,30,35,40,45,50,55 * * * *",
  "quarter-hour": "0,15,30,45 * * * *",
  hour: "0 * * * *",
  "6-hours": "0 0,6,12,18 * * *",
  midnight: "0 0 * * *",
  week: "0 0 * * 1",
  month: "0 0 1 * *",
  "3-months": "0 0 1 1,4,7,10 *",
  year: "0 0 1 1 *",
};

export const scheduleCronJobs = async () => {
  const tsFunctions = await db.get("TsFunction");

  log("Scheduling CRON jobs", { type: "important" });

  getObjectKeysArray(scheduleObject).map((interval) => {
    const cronExpression = scheduleObject[interval];
    const functionsToExecute = tsFunctions.filter(
      (x) => x.runEveryPeriod === interval
    );
    if (functionsToExecute.length > 0) {
      console.log(
        `- ${functionsToExecute.length} functions for ${interval} cron`
      );
      schedule(
        cronExpression,
        () => {
          oneByOne(functionsToExecute, executeCronFunction);
        },
        { name: interval }
      );
    }
  });
};
