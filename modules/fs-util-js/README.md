# Fs util js

fs-util-js (`OperationClassification` node-cjs)



# Api reference

## makeRelative()

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string | absolute path of a file or folder without a slash at the end |,| baseFolderPath | string | folder path without a slash at the end |
| **Output** | `String`   |    |



## 📄 makeRelative (exported const)

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


## getFolderJs()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## 📄 getFolderJs (exported const)

## getExtension()

returns the extension of the filename or path WITHOUT dot

NB: not sure, but could be nice to replace this with path.extname(pathString)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getExtension (exported const)

returns the extension of the filename or path WITHOUT dot

NB: not sure, but could be nice to replace this with path.extname(pathString)


## withoutExtension()

removes extension from the filename


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 withoutExtension (exported const)

removes extension from the filename


## getFileOrFolderName()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## getSubExtension()

Provide a filename including its extension, to get the subextension.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## isPathRelative()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getFileOrFolderName (exported const)

## 📄 getSubExtension (exported const)

Provide a filename including its extension, to get the subextension.


## 📄 isPathRelative (exported const)

## withoutSubExtensions()

Removes all subextensions from the filename (if any) including main extension.

Only returns everything before the first dot (.)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 path (exported const)

## 📄 withoutSubExtensions (exported const)

Removes all subextensions from the filename (if any) including main extension.

Only returns everything before the first dot (.)

# Internal

<details><summary>Show internal (2)</summary>
    
  # removeTrailingSlash()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 removeTrailingSlash (exported const)

  </details>

