import { nodemon } from "nodemon";

export const runFunctionServerDev = () => {
  nodemon({
    operationName: "function-server",
    cliFunctionName: "runFunctionServer",
    vars: ["true", "false"],
    restartVars: ["true", "true"],
  });
};
