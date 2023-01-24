# Ffmpeg util

ffmpeg-util (`OperationClassification` node-cjs)



# Api reference

## convertToMp3()

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


| Input      |    |    |
| ---------- | -- | -- |
| sourcePath | string |  |,| destinationPath | string |  |,| config (optional) | { toWav?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 convertToMp3 (exported const)

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


## compressConvert()

Super useful wrapper around ffmpeg to do just all the stuff I want to do with it

TODO: fix fps, not implemented yet


| Input      |    |    |
| ---------- | -- | -- |
| absoluteSourceFilePath | string |  |,| config (optional) | { outputFolderPath?: string, <br />name?: string, <br />fps?: number, <br />sizeWidthPx?: number, <br />aspectRatio?: { x: number, <br />y: number, <br /> }, <br />quality?: number, <br />targetFormat?: webp / png / mp4 / mp3 / wav, <br />is16bitWav?: boolean, <br />keepOriginal?: boolean, <br />isDebug?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 compressConvert (exported const)

Super useful wrapper around ffmpeg to do just all the stuff I want to do with it

TODO: fix fps, not implemented yet


## convertToMp4()

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


| Input      |    |    |
| ---------- | -- | -- |
| sourcePath | string |  |,| destinationPath | string |  |
| **Output** |    |    |



## 📄 convertToMp4 (exported const)

Uses ffmpeg to convert a file to mp3

Returns the new file path on success

# CLI

<details><summary>Show CLI information (4)</summary>
    
  # compressImagesCli()

`compressImages` CLI syntax:

`compressImages [basePath]`

can also be relative path


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## compressMp4sCli()

`compressMp4s` CLI syntax:

`compressMp4s [basePath]`

can also be relative path


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 compressImagesCli (unexported const)

`compressImages` CLI syntax:

`compressImages [basePath]`

can also be relative path


## 📄 compressMp4sCli (unexported const)

`compressMp4s` CLI syntax:

`compressMp4s [basePath]`

can also be relative path
  </details>

# Internal

<details><summary>Show internal (4)</summary>
    
  # compressImages()

searches the folder recursively for all images and converts them to webp


| Input      |    |    |
| ---------- | -- | -- |
| absoluteBasePath | string |  |,| sizeWidthPx (optional) | number |  |,| quality (optional) | number |  |
| **Output** |    |    |



## compressMp4()

Compress mp4 to very small


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## 📄 compressImages (exported const)

searches the folder recursively for all images and converts them to webp


## 📄 compressMp4 (exported const)

Compress mp4 to very small
  </details>

