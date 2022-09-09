# Generate sdk operations

generate-sdk-operations (node operation)



# Outline

## Functions

- [generateDbSdk](#generateDbSdk)
- [generateEnvSdks](#generateEnvSdks)
- [generateFunctionSdks](#generateFunctionSdks)
- [generateOperationsSdk](#generateOperationsSdk)
- [generateSdkOperations](#generateSdkOperations)
- [getSdkFunctions](#getSdkFunctions)
- [isTsFunctionIndexable](#isTsFunctionIndexable)
- [newEnvSdk](#newEnvSdk)
- [newSdkKeysOperation](#newSdkKeysOperation)
- [newSdkOperation](#newSdkOperation)
- [tsFunctionIsSdkable](#tsFunctionIsSdkable)



# Functions

## generateDbSdk



## Returns: unknown

## generateEnvSdks

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations

## Returns: unknown

## generateFunctionSdks

Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system

## Returns: unknown

## generateOperationsSdk

`sdk-operations` indexes all operations and builds an object containing all operations.

## Returns: unknown

## generateSdkOperations

(re)generates all sdk operations for any project

## Returns: unknown

## getSdkFunctions

returns all sdk functions grouped by operation classification

## Returns: unknown

## isTsFunctionIndexable

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!

### Returns: boolean







## newEnvSdk


## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


### Returns: unknown

### newSdkKeysOperation

### Returns: unknown

### newSdkOperation

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


### Returns: unknown

### tsFunctionIsSdkable

#### Returns: boolean

