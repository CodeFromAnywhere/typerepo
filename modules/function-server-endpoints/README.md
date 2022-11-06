# Function server endpoints

function-server-endpoints (node operation)

Wraps all functions found in `sdk-api` and creates `server` endpoints for them. Besides simply wrapping them into an endpoint, it also adds some extra layers to every function.




# Outline

## Functions

- [calculateDeviceName](#calculateDeviceName)
- [cleanupTimer](#cleanupTimer)
- [executeFunctionWithParameters](#executeFunctionWithParameters)
- [getHasAuthorization](#getHasAuthorization)
- [getNewPerformance](#getNewPerformance)
- [getTsFunction](#getTsFunction)
- [storeFunctionExecution](#storeFunctionExecution)
- [upsertDevice](#upsertDevice)

## Interfaces

- [IPInfo](#ipinfo)

## Variables

- [calculateDeviceName](#calculatedevicename)
- [cleanupTimer](#cleanuptimer)
- [deviceInclude](#deviceinclude)
- [executeFunctionWithParameters](#executefunctionwithparameters)
- [functionEndpoints](#functionendpoints)
- [getApiEndpoints](#getapiendpoints)
- [getHasAuthorization](#gethasauthorization)
- [getNewPerformance](#getnewperformance)
- [getTsFunction](#gettsfunction)
- [postApiEndpoints](#postapiendpoints)
- [storeFunctionExecution](#storefunctionexecution)
- [timer](#timer)
- [upsertDevice](#upsertdevice)



# Functions

## calculateDeviceName

### Parameters (2)

#### Parameter 1: ipInfo: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |





## cleanupTimer

### Parameters (1)

#### Parameter 1: uniqueId: string

## executeFunctionWithParameters

steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional




## getHasAuthorization

### Returns: object

## getNewPerformance

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| label  | string |  |
| durationMs  | number |  |



### Parameters (3)

#### Parameter 1: label: string

#### Parameter 2: uniqueId: string

#### Parameter 3: isNew (optional): boolean

## getTsFunction

Uses the `sdk-function-paths` sdk to the indexation of any function in the project.




### Parameters (1)

#### Parameter 1: functionName: string

## storeFunctionExecution

wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
.




## upsertDevice

Either finds the device and updates it according to the new request metadata, or creates a new device.

Should never return `undefined` if the database functions...


TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)



# Interfaces

## IPInfo

Information that is inferred from an IP





Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| position (optional) | object |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |


# Variables

## calculateDeviceName (exported const)

## cleanupTimer (exported const)

## deviceInclude (unexported const)

## executeFunctionWithParameters (exported const)

steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional


## functionEndpoints (exported const)

routes to post and execute operation functions


## getApiEndpoints (exported const)

routes to post and execute operation functions


## getHasAuthorization (exported const)

## getNewPerformance (exported const)

## getTsFunction (exported const)

Uses the `sdk-function-paths` sdk to the indexation of any function in the project.


## postApiEndpoints (exported const)

routes to post and execute operation functions


## storeFunctionExecution (exported const)

wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
.


## timer (unexported let)

## upsertDevice (exported const)

Either finds the device and updates it according to the new request metadata, or creates a new device.

Should never return `undefined` if the database functions...


TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)

