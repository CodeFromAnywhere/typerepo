# Markdown reader web

markdown-reader-web (web operation)



# Outline

## Functions

- [getKeysAtObjectPath](#getKeysAtObjectPath)
- [getOneFolderUpPath](#getOneFolderUpPath)
- [MyApp](#MyApp)
- [pathGetStaticProps](#pathGetStaticProps)
- [pathsGetStaticPaths](#pathsGetStaticPaths)

## Interfaces:

- [GetStaticPathsContext](#GetStaticPathsContext)
- [GetStaticPropsContext](#GetStaticPropsContext)



# Functions

## getKeysAtObjectPath

### Parameters (1)

#### Parameter 1: objectPath: string

## getOneFolderUpPath

### Parameters (1)

#### Parameter 1: folderPath: string

## MyApp

## pathGetStaticProps

### Parameters (1)

#### Parameter 1: context: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| preview (optional) | boolean |  |
| previewData (optional) | object |  |
| locale (optional) | string |  |
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## pathsGetStaticPaths

Function that tells Next.js what the pages are that need to be statically generated




### Parameters (1)

#### Parameter 1: context: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |


# Interfaces

## GetStaticPathsContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## GetStaticPropsContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| params (optional) | object |  |
| preview (optional) | boolean |  |
| previewData (optional) | object |  |
| locale (optional) | string |  |
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |


