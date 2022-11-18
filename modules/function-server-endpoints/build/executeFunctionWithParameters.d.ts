import { sdk } from "sdk-api";
import { Context } from "server/typings/common";
import { RealApiReturnType } from "api-types";
/**
steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional

*/
export declare const executeFunctionWithParameters: (functionName: keyof typeof sdk, parameters: undefined | any[], serverContext: Context) => Promise<RealApiReturnType<any>>;
//# sourceMappingURL=executeFunctionWithParameters.d.ts.map