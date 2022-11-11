# Bundle util

bundle-util (`OperationClassification` node)



# Api reference

## getBundleSummary()

Summarizes a bundle config so it can be used easily in things like explore project


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |
| **Output** | { packageNames: string[], <br />moduleNames: string[], <br />appNames: string[], <br /> }   |    |



## 📄 getBundleSummary (exported const)

Summarizes a bundle config so it can be used easily in things like explore project


## getDbModelsForBundle()

Gets all TsInterface's that are used in a bundle according to a BundleConfig


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |
| **Output** |    |    |



## 📄 getDbModelsForBundle (exported const)

Gets all TsInterface's that are used in a bundle according to a BundleConfig


## 🔹 BundleSummary

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |


