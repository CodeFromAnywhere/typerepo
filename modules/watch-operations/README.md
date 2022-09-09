# Watch operations

watch-operations (node operation)



# Outline

## Docs

- [Cleanup](#cleanup)

## Functions

- [exitIfOperationsChange](#exitIfOperationsChange)
- [gitCommitAllEveryMinute](#gitCommitAllEveryMinute)
- [main](#main)
- [watchOperations](#watchOperations)



# Docs

## Cleanup

### Cleanup

If you want to clean up your operations, you can do the following:

- run `removeAllFolders index`
- run `rebuildAllOperations`
- run `generateSdk`

If you don't have these cli's, make sure to install them first.


# Functions

## exitIfOperationsChange

every 5 seconds compares if the operationsourcepaths have changed. If so, exits the process

## Returns: unknown

## gitCommitAllEveryMinute

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

## Returns: unknown

## main



## Returns: unknown

## watchOperations

watches all operations and does much more

## Returns: unknown

