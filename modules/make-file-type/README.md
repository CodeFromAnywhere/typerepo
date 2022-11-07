# Make file type

make-file-type (js operation)

exposes `makeFileType`, a function that helped turning a path into a specific type. Was previously used for things like watching, but this is probably not needed anymore.




# Outline

## Functions

- [makeFileType](#makeFileType)

## Interfaces

- [FileType](#filetype)

## Variables

- [makeFileType](#makefiletype)



# Functions

## makeFileType()

| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |
| **Output** |    |    |


# Interfaces

## 🔷 FileType

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| size  | number |  |
| mtime_ms  | number |  |
| exists  | boolean |  |
| type  | string |  |


# Variables

## 📄 makeFileType (exported const)

