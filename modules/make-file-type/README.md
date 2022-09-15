# Make file type

make-file-type (js operation)



# Outline

## Functions

- [makeFileType](#makeFileType)

## Interfaces:

- [FileType](#FileType)



# Functions

## makeFileType

### Parameters (1)

#### Parameter 1: filePath: string

# Interfaces

## FileType

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | filename including extension |
| size  | number | size in bytes |
| mtime_ms  | number | unix timestamp in ms |
| exists  | boolean | whether the file still exists |
| type  | string | f stands for file, it seems, for the rest I don't know |


