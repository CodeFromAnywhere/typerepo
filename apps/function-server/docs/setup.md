# Setup

`function-server` is the main way to create API endpoints for your `typerepo` project.

If you want to expose endpoints through the `function-server`, all you need to do is create a `node` operation (manually or with `newOperation`) with functions inside. You can then use `rebuildOperation` to build and index the operation. After that you need to `generateSdkOperations` to ensure `function-server` can find your endpoints.

There are three types of endpoints: functions, post-api's and get-api's. By default, every function in node-operations will become a `function` endpoint. This means it will be accessible in your api through `https://yourapi.com/function/[functionName]` as a `POST` API. Function api's are accessible through the `api` operation at the frontend, through the `api` object, `apiWithConfig` objet, and `queries` object. Their interface 100% aligned with what you take as input and return as output in the function. This makes it super easy to use, as it's very type-safe. If you want to access your function endpoint manually, you can do this by passing the parameters in the function inside a `parameters` array in the `body` of the `POST` request.

However, if the function-name ends with `GetApi` or `PostApi` it will not be included in the function endpoints. If you do this, the function will take `Context` (from server.js) as its sole parameter, and you can do everything you want in that endpoint. It will be accessible at `https://yourapi.com/[endpoint]` where `endpoint` is the name of the function with the `GetApi` or `PostApi` suffix omitted. E.g. the function `loginPostApi` will become accessible through `POST https://yourapi.com/login`, the function `getAssetGetApi` will become accessible through `GET https://yourapi.com/getAsset`.

The advantage of the `function` endpoints is that they are simple.

# Authorization / Authentication

For now, every endpoint is behind a single administrator authorsation token, which is stored in `sdk-env-private` and should be stored in your websites localStorage in key `api.authToken` for the user to be authenticated through the `api` object.

More authentication methods are coming soon!
