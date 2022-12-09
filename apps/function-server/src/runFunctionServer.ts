import server from "server";
import { Options } from "server/typings/options";
import { Context } from "server/typings/common";
import {
  functionPostEndpoints,
  functionGetEndpoints,
} from "function-server-endpoints";
import { watchAll } from "watch-all";
import { ports } from "port-conventions";
import { getProjectRoot } from "get-path";
import { path } from "fs-util";
import { execSync } from "child-process-helper";
import { log } from "log";
import { startApp } from "pm2-util";
import { scheduleCronJobs } from "./scheduleCronJobs";

/**
 * runs sdk api server using "server" package.
 *
 * server will be exposed on port 42000
 */

export const runFunctionServer = (
  isWatching?: boolean,
  isRestart?: boolean
) => {
  const { header } = server.reply;

  startApp("search-web", true).then((result) => {
    if (!result?.isSuccessful) {
      console.log({ result });
      log(
        `Something went wrong starting "search-web". Maybe you don't have it?`,
        { type: "error" }
      );
      return;
    }

    if (!isRestart && isWatching) {
      // Open in browser
      setTimeout(() => {
        execSync(`open http://localhost:42001`);
        log(`Opened the homepage in your browser`, { type: "success" });
      }, 1000);
    }
  });
  const cors = [
    /* 
     see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    see https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
    NB: cannot set "*" i.c.m. cookies

    a better way to allow multiple origins is probably something like this:

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

  const serverOptions: Options = {
    port: ports["function-server"],
    public: projectPublicFolder,
    security: { csrf: false },
    parser: {
      // NB: seems the server.js types are not 100% correct
      data: { maxFileSize: 1024 * 1024 * 1024 * 32 } as any,
      cookie: { maxAge: 900000, httpOnly: false },
    },
  };
  // @ts-ignore
  server(
    serverOptions,
    cors,
    functionPostEndpoints,
    functionGetEndpoints,

    server.router.get("/", () => "Hello world, your Typerepo is running!"),
    server.router.get("*", async (ctx) => {
      return {
        success: false,
        message: "Endpoint does not exist, are you sure it's a GET endpoint?",
      };
    })
  ).then(async (context) => {
    if (
      process.env.NODE_APP_INSTANCE === undefined ||
      process.env.NODE_APP_INSTANCE === "0"
    ) {
      // only on the first core, schedule crons and initiate watchers
      scheduleCronJobs();

      if (isWatching) {
        watchAll();
      }
    }

    console.log(
      `Running on port ${ports["function-server"]}. All node functions are now available through /function/[name] or through the "api" object...`
    );
  });
};
