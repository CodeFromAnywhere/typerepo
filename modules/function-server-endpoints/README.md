# Function server endpoints

function-server-endpoints (node operation)

Wraps all functions found in `sdk-api` and creates `server` endpoints for them. Besides simply wrapping them into an endpoint, it also adds some extra layers to every function.




# Api reference

## 📄 functionEndpoints (exported const)

routes to post and execute operation functions


## 📄 getApiEndpoints (exported const)

routes to post and execute operation functions


## 📄 postApiEndpoints (exported const)

routes to post and execute operation functions

# Internal

<details><summary>Show internal (16)</summary>
  
  # calculateDeviceName()




| Input      |    |    |
| ---------- | -- | -- |
| ipInfo | `IPInfo` |  |,| userAgent | `UAParser.IResult` |  |
| **Output** | `String`   |    |



## cleanupTimer()

| Input      |    |    |
| ---------- | -- | -- |
| uniqueId | string |  |
| **Output** |    |    |



## executeFunctionWithParameters()

steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getHasAuthorization()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getNewPerformance()

| Input      |    |    |
| ---------- | -- | -- |
| label | string |  |,| uniqueId | string |  |,| isNew (optional) | boolean |  |
| **Output** | { label: string, <br />durationMs: number, <br /> }   |    |



## getTsFunction()

Uses the `sdk-function-paths` sdk to the indexation of any function in the project.


| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |
| **Output** |    |    |



## storeFunctionExecution()

wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsertDevice()

Either finds the device and updates it according to the new request metadata, or creates a new device.

Should never return `undefined` if the database functions...


TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 calculateDeviceName (exported const)

## 📄 cleanupTimer (exported const)

## 📄 executeFunctionWithParameters (exported const)

steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional


## 📄 getHasAuthorization (exported const)

## 📄 getNewPerformance (exported const)

## 📄 getTsFunction (exported const)

Uses the `sdk-function-paths` sdk to the indexation of any function in the project.


## 📄 storeFunctionExecution (exported const)

wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
.


## 📄 upsertDevice (exported const)

Either finds the device and updates it according to the new request metadata, or creates a new device.

Should never return `undefined` if the database functions...


TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
  </details>

