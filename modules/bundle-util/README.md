# Bundle util

bundle-util (node operation)



# Outline

## Functions

- [getBundleSummary](#getBundleSummary)
- [getDbModelsForBundle](#getDbModelsForBundle)

## Interfaces

- [BundleConfig](#bundleconfig)
- [BundleSummary](#bundlesummary)

## Variables

- [getBundleSummary](#getbundlesummary)
- [getDbModelsForBundle](#getdbmodelsforbundle)



# Functions

## getBundleSummary

Summarizes a bundle config so it can be used easily in things like explore project


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |



### Parameters (1)

#### Parameter 1: bundleConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## getDbModelsForBundle

Gets all TsInterface's that are used in a bundle according to a BundleConfig




### Parameters (1)

#### Parameter 1: bundleConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |


# Interfaces

## BundleConfig

Configuration options for bundles. Used with `generateBundle`

Everything in this model will be copied over to the created bundle, except for `createBundleConfig` and `customisableBundleConfig`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |
| slug  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| customisableBundleConfig  | object |  |
| createBundleConfig  | object |  |



## BundleSummary

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |


# Variables

## getBundleSummary (exported const)

Summarizes a bundle config so it can be used easily in things like explore project


## getDbModelsForBundle (exported const)

Gets all TsInterface's that are used in a bundle according to a BundleConfig

