# Watch operations

watch-operations (`OperationClassification` node-cjs)

Calls rebuildOperation for every filechange in every operation watched




# Docs

<details><summary>cleanup.md</summary>
    
  # Cleanup

If you want to clean up your operations, you can do the following:

- run `removeAllFolders index`
- run `rebuildAllOperations`
- run `generateSdk`

If you don't have these cli's, make sure to install them first.

  </details>

# Api reference

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

  </details>

# Internal

<details><summary>Show internal (6)</summary>
    
  # exitIfOperationsChange()

every 5 seconds compares if the operationsourcepaths have changed. If so, exits the process


| Input      |    |    |
| ---------- | -- | -- |
| allOperationSourcePaths | string[] |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## gitCommitAllCron()

const pushPosition = async () => {
const position = await getLocation();
if (position) {
push("Position", {
...position,
createdAt: Date.now(),
updatedAt: Date.now(),
createdFirstAt: Date.now(),
deletedAt: 0,
id: generateId(),
});
}
};

const pushLight = async () => {
const light = 1;
if (light) {
push("Light", {
id: generateId(),
createdFirstAt: Date.now(),
createdAt: Date.now(),
updatedAt: Date.now(),
deletedAt: 0,
light,
});
}
};

const watchLocation = async () => {
pushPosition();
setInterval(() => {
pushPosition();
}, 60000);
};

const watchLight = async () => {
pushLight();
setInterval(() => {
pushLight();
}, 60000);
};


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## watchOperations()

watches all operations and does much more


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## 📄 exitIfOperationsChange (exported const)

every 5 seconds compares if the operationsourcepaths have changed. If so, exits the process


## 📄 gitCommitAllCron (exported const)

## 📄 watchOperations (exported const)

watches all operations and does much more
  </details>

