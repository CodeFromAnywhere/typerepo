# Bundle util

bundle-util (node operation)



# Outline

## Functions

- [getBundleSummary](#getBundleSummary)
- [getDbModelsForBundle](#getDbModelsForBundle)

## Interfaces

- [BundleSummary](#bundlesummary)

## Variables

- [getBundleSummary](#getbundlesummary)
- [getDbModelsForBundle](#getdbmodelsforbundle)



# Functions

## getBundleSummary()

Summarizes a bundle config so it can be used easily in things like explore project


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |
| **Output** | { packageNames: string[], <br />moduleNames: string[], <br />appNames: string[], <br /> }   |    |



## getDbModelsForBundle()

Gets all TsInterface's that are used in a bundle according to a BundleConfig


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |
| **Output** |    |    |


# Interfaces

## 🔷 BundleSummary

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |


# Variables

## 📄 getBundleSummary (exported const)

Summarizes a bundle config so it can be used easily in things like explore project


## 📄 getDbModelsForBundle (exported const)

Gets all TsInterface's that are used in a bundle according to a BundleConfig

