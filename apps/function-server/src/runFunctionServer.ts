import server from "server";
import { oneByOne } from "one-by-one";
import { Context } from "server/typings/common";
import {
  functionEndpoints,
  getApiEndpoints,
  postApiEndpoints,
} from "function-server-endpoints";
import { log } from "log";
import { publicEnvironmentVariables } from "sdk-env-public";
import { sdk } from "sdk-api";
import { getProjectRoot } from "get-path";
import { path } from "fs-util";
import { schedule } from "node-cron";
import { db } from "database";
import { RunEveryPeriodEnum, TsFunction } from "code-types";
import { getObjectKeysArray, takeFirst } from "js-util";

const port = publicEnvironmentVariables.serverPort;

export const executeFunction = async (tsFunction: TsFunction) => {
  //@ts-ignore
  sdk[tsFunction.name]?.();
};

/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
const scheduleObject: { [interval in RunEveryPeriodEnum]: string } = {
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

/**
 * runs sdk api server using "server" package.
 *
 * server will be exposed on port 4201
 */
export const runFunctionServer = () => {
  const { header } = server.reply;
  const cors = [
    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    // see https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
    // NB: cannot set "*" i.c.m. cookies
    /* a better way to allow multiple origins is probably something like this:

      const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  */

    () => header("Access-Control-Allow-Origin", "*"),
    () =>
      header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie" // not sure if * can be put here after the others...
      ),
    () =>
      header(
        "Access-Control-Allow-Methods",
        "GET, PUT, PATCH, POST, DELETE, HEAD"
      ),

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
    // NB: important for cookies!
    () => header("Access-Control-Allow-Credentials", "true"),
    (ctx: Context) => (ctx.method.toLowerCase() === "options" ? 200 : false),
  ];

  const projectRoot = getProjectRoot();
  const projectPublicFolder = projectRoot
    ? path.join(projectRoot, "public")
    : path.join(__dirname, "..", "public");

  // @ts-ignore
  server(
    {
      port,
      public: projectPublicFolder,
      security: { csrf: false },
      parser: {
        data: { maxFileSize: 1024 * 1024 * 1024 * 32 },
        cookie: {
          maxAge: 900000,
          httpOnly: false,
        },
      },
    },
    // NB: afaik... it DOES NOT matter if you set the cookie before or after CORS!

    cors,

    // server.router.get("/test", (ctx) => {
    //   console.log((ctx as any).cookies);
    //   return server.reply.cookie("TEST", "123tes").send({ test: true });
    // }),

    // server.router.post("/login", (ctx) => {
    //   const authToken = ctx.data?.authToken;

    //   const loginResult = {
    //     isSuccessful: true,
    //     message: "Logged in",
    //   };

    //   console.log("set set set vjajaja", { authToken });

    //   return server.reply
    //     .cookie("authToken", authToken, {
    //       /**
    //        * NB: VERY IMPORTANT In order to receive the cookie at other port or domain
    //        */
    //       sameSite: "none",
    //       secure: true,
    //       /**
    //        * It turned out that Chrome won't set the cookie if the domain contains a port. Setting it for localhost (without port) is not a problem
    //        */
    //       domain: "localhost",
    //     })
    //     .send(loginResult);
    // }),

    // server.router.get("/login", (ctx) => {
    //   const authToken = ctx.query?.authToken;

    //   const loginResult = {
    //     isSuccessful: true,
    //     message: "Logged in",
    //   };

    //   console.log("set set set", { authToken });

    //   return server.reply
    //     .cookie("authToken", takeFirst(authToken))
    //     .send(loginResult);
    // }),

    // server.router.get("/test2", (ctx) => {
    //   console.log((ctx as any).cookies);
    //   return server.reply.cookie("TESTAfter", "123tes").send({ test: true });
    // }),

    ...getApiEndpoints,
    ...postApiEndpoints,

    functionEndpoints,

    server.router.get("*", async (ctx) => {
      return {
        success: false,
        message: "Endpoint does not exist, are you sure it's a GET endpoint?",
      };
    })
  ).then(async (context) => {
    const tsFunctions = await db.get("TsFunction");

    if (
      process.env.NODE_APP_INSTANCE === undefined ||
      process.env.NODE_APP_INSTANCE === "0"
    ) {
      log("Scheduling CRON jobs", { type: "important" });

      getObjectKeysArray(scheduleObject).map((interval) => {
        const cronExpression = scheduleObject[interval];
        const functionsToExecute = tsFunctions.filter(
          (x) => x.runEveryPeriod === interval
        );
        if (functionsToExecute.length > 0) {
          schedule(
            cronExpression,
            () => {
              oneByOne(functionsToExecute, executeFunction);
            },
            { name: interval }
          );
        }
      });
    }

    console.log(
      `Running on port ${port}. All node functions are now available through /function/[name] or through the "api" object...`
    );
  });
};
