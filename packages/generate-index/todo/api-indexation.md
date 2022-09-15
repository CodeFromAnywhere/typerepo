<!-- I found a better way by directly coupling the backend function to the api function. No need to generate an index for api specifically! -->

# Finish `sdk-api`

Return `any` in case no return type is available.

Make it syntax-correct.

Remove duplicates and non-relevant functions.

Make an `api` function that simply POST with that type interface.

## API indexation

This is fundamental because it's very useful for every frontend to be made with King OS.

**API index generation**

- An `api` object is generated in the `index.ts` using `generateIndex`. This refers to all functions that were detected to be `api` functions. If no `api` functions are found, the `api` object is not generated.
- Use `Function.length` to know whether the function takes a valid amount of arguments.
- We need a parser that parses a typescript JSON schema into a type so we can generate types from JSON schemas as seen in the `interfaces` index.
- An `Api` type is generated in the `index.ts` using `generateIndex`. This should refer to the type interfaces of all functions that were detected to be `api` functions. This is generated based on the function and interface index of the operation. It can bundle all interfaces like this: `type Api = { "endpoint1/path": { body: unknown; response: unknown; method: "post" }, ... }`
- An `api` object is generated in `api.ts` with `generateApiIndex` (which uses `generateIndex`). This finds all `api` objects in all operations and adds them together into one big `api` object
- An `Api` type is generated in `api.ts` with `generateApiIndex` (which uses `generateIndex`). This file can be saved in a frontend package (or package without node to make it full-stack). This finds all `Api` types in all operations and adds them together into one big conjunction type using something like `type Api = Api1 & Api2 & Api3`

**Use API index to create server**

- The generated api index can be imported and used in the server to expose the endpoints. This is not abstracted away because people may need to create extra custom endpoints or edit the configuration.
- Use `Function.length` to know whether or not to pass the `body` and `ctx` into the api function.
