---
runEveryPeriod: midnight
---
# Asset functions node

asset-functions-node (node operation)



# Outline

## Docs

- [Getting started](#getting-started)

## Functions

- [compressAsset](#compressAsset)
- [convertToMp3](#convertToMp3)
- [deleteReferencedAsset](#deleteReferencedAsset)
- [downloadRemoteAsset](#downloadRemoteAsset)
- [findAbsoluteAssetPathFromReference](#findAbsoluteAssetPathFromReference)
- [findAllProjectMedia](#findAllProjectMedia)
- [findAssetParametersRecursively](#findAssetParametersRecursively)
- [getAssetDirectlyGetApi](#getAssetDirectlyGetApi)
- [getReferencedAssetGetApi](#getReferencedAssetGetApi)
- [getStorageLocationInfo](#getStorageLocationInfo)
- [getTemporaryAssetsFolderPath](#getTemporaryAssetsFolderPath)
- [processAsset](#processAsset)
- [processItemAssets](#processItemAssets)
- [removeOldTemporaryAssets](#removeOldTemporaryAssets)
- [serverDownloadReply](#serverDownloadReply)
- [uploadAssetPostApi](#uploadAssetPostApi)

## Interfaces

- [AssetParameter](#assetparameter)
- [ProcessAssetConfig](#processassetconfig)

## Variables

- [compressAsset](#compressasset)
- [convertToMp3](#converttomp3)
- [deleteReferencedAsset](#deletereferencedasset)
- [downloadRemoteAsset](#downloadremoteasset)
- [findAbsoluteAssetPathFromReference](#findabsoluteassetpathfromreference)
- [findAllProjectMedia](#findallprojectmedia)
- [findAssetParametersRecursively](#findassetparametersrecursively)
- [getAssetDirectlyGetApi](#getassetdirectlygetapi)
- [getReferencedAssetGetApi](#getreferencedassetgetapi)
- [getStorageLocationInfo](#getstoragelocationinfo)
- [getTemporaryAssetsFolderPath](#gettemporaryassetsfolderpath)
- [mediaExtensions](#mediaextensions)
- [processAsset](#processasset)
- [processItemAssets](#processitemassets)
- [removeOldTemporaryAssets](#removeoldtemporaryassets)
- [serverDownloadReply](#serverdownloadreply)
- [uploadAssetPostApi](#uploadassetpostapi)



# Docs

## Getting started

### Asset upload

If you want to use `sensible-asset`, you need to add it into a `typerepo`. Ensure that you convert your project into a `typerepo` first, if you don't have that already...

After that, all you need to do is add the `asset` folder to your project `packages`. Besides that, you can use it in your form by adding it as a plugin.

Now all you need to do is use the `AssetInput` anywhere you want to upload assets, and use the `processAsset` function if you want to put it somewhere.


# Functions

All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## serverDownloadReply()

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAssetPath | string |  |,| isDownload | boolean |  |
| **Output** |    |    |



## uploadAssetPostApi()

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |


# Interfaces

## 🔷 AssetParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| assetInputType  | object |  |
| parameterName  | string |  |
| stack (optional) | array |  |



## 🔷 ProcessAssetConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| modelName (optional) | string |  |


# Variables

All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


## 📄 serverDownloadReply (exported const)

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


## 📄 uploadAssetPostApi (exported const)

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.

