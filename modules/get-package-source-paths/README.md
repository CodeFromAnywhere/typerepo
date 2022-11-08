# Get package source paths

get-package-source-paths (node operation)

Returns an array of absolute file paths of (typescript) files in the src of your operation




# Api reference

## getPackageSourcePaths()

Returns an array of absolute file paths of (typescript) files in the src of your operation

TODO: we need a way to explore these glob patterns inside of tsConfig.include.
until then, just assume we use "src" as the only folder


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationBasePath,
  ignoreIndexFiles,
  allTypes,
} | { operationBasePath: string, <br />ignoreIndexFiles?: boolean, <br />allTypes?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 getPackageSourcePaths (exported const)

Returns an array of absolute file paths of (typescript) files in the src of your operation

TODO: we need a way to explore these glob patterns inside of tsConfig.include.
until then, just assume we use "src" as the only folder

# Internal

<details><summary>Show internal (0)</summary>
  
  
  </details>

