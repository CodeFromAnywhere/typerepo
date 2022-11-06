# Function server

function-server (server operation)

Server that exposes all typerepo api functions wrapped into easily accessible endpoints.




# Outline

## Docs

- [Setup](#setup)
- [Why serverjs](#why-serverjs)

## Functions

- [executeFunction](#executeFunction)
- [runFunctionServer](#runFunctionServer)

## Interfaces

- [RunEveryPeriodEnum](#runeveryperiodenum)
- [TsFunction](#tsfunction)

## Variables

- [executeFunction](#executefunction)
- [port](#port)
- [runFunctionServer](#runfunctionserver)
- [scheduleObject](#scheduleobject)



# Docs

## Setup

### Setup

`function-server` is the main way to create API endpoints for your `typerepo` project.

If you want to expose endpoints through the `function-server`, all you need to do is create a `node` operation (manually or with `newOperation`) with functions inside. You can then use `rebuildOperation` to build and index the operation. After that you need to `generateSdkOperations` to ensure `function-server` can find your endpoints.

There are three types of endpoints: functions, post-api's and get-api's. By default, every function in node-operations will become a `function` endpoint. This means it will be accessible in your api through `https://yourapi.com/function/[functionName]` as a `POST` API. Function api's are accessible through the `api` operation at the frontend, through the `api` object, `apiWithConfig` objet, and `queries` object. Their interface 100% aligned with what you take as input and return as output in the function. This makes it super easy to use, as it's very type-safe. If you want to access your function endpoint manually, you can do this by passing the parameters in the function inside a `parameters` array in the `body` of the `POST` request.

However, if the function-name ends with `GetApi` or `PostApi` it will not be included in the function endpoints. If you do this, the function will take `Context` (from server.js) as its sole parameter, and you can do everything you want in that endpoint. It will be accessible at `https://yourapi.com/[endpoint]` where `endpoint` is the name of the function with the `GetApi` or `PostApi` suffix omitted. E.g. the function `loginPostApi` will become accessible through `POST https://yourapi.com/login`, the function `getAssetGetApi` will become accessible through `GET https://yourapi.com/getAsset`.

The advantage of the `function` endpoints is that they are simple.


### Authorization / Authentication

For now, every endpoint is behind a single administrator authorsation token, which is stored in `sdk-env-private` and should be stored in your websites localStorage in key `api.authToken` for the user to be authenticated through the `api` object.

More authentication methods are coming soon!


## Why serverjs

[Server.js](https://serverjs.io) is used because it has many great plugins out of the box and doesn't require another middleware for every little thing. I am aware that it is a less common server to use, but it's great, not only because it presents the developer with all required things in a clear way, but also because it keeps the endpoints clean.

With normal [express.js](https://expressjs.com) we are required to return our endpoint response through a function like `res.send`. In `server.js` this is not needed, you can simply return it from the function and put it in the server as an endpoint. This makes it super easy to reuse functions, for example internally (without api), as CLI, and as server endpoint.

Please note: Typerepo might revert back to something like express.js later, as it's not 100% required anymore, since we can simply wrap our general purpose functions into a express endpoint as well. The advantage of express.js would be that it's much better documented and it has first-class support for everything.

Nevertheless, server.js works fine and most things are documented.


# Functions

## executeFunction

### Parameters (1)

#### Parameter 1: tsFunction: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| parameters (optional) | array |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## runFunctionServer

runs sdk api server using "server" package.

server will be exposed on port 4201



# Interfaces

## RunEveryPeriodEnum

Used to specify functions that need to run every time with a specific interval

All times are at at the server timezone time

- `minute`: every minute at 0 seconds
- `5-mintues`: every 5 minutes, starting at the first minute of the hour
- `quarter-hour`: every 15 minutes, starting at the first minute of the hour
- `hour`: every hour, starting at the first minute of the hour
- `6-hours`: every 6 hours, starting at midnight
- `midnight`: every midnight (00:00:00)
- `week`: every week at sundaynight (sunday, 1 second after 23:59:59 PM)
- `month`: at the first second of the first day of the month (0:00:00)
- `3-months`: every start of the quarter: january 1st (0:00:00), april 1st, july 1st, october 1st
- `year`: every new year at january 1st at 0:00:00








## TsFunction

Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |


# Variables

## executeFunction (exported const)

## port (unexported const)

## runFunctionServer (exported const)

runs sdk api server using "server" package.

server will be exposed on port 4201


## scheduleObject (unexported const)

For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`

