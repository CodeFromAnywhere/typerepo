# Next paths

next-paths (`OperationClassification` cjs)


## 🌐 next-paths

operation that helps you to render your own paths in a next project without using their pages convention




# Api reference

## usePath()

uses `useRouter` from `next.js` to get the lastChunk and the `fullPath` out of the `paths`. Assumes you have a page in your next.js project called `[...paths]`.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { lastChunk: {  }, <br />fullPath: string, <br /> }   |    |



## 📄 usePath (exported const)

uses `useRouter` from `next.js` to get the lastChunk and the `fullPath` out of the `paths`. Assumes you have a page in your next.js project called `[...paths]`.


## getFullPath()

gets a path string from `next.js` `router.query`.


| Input      |    |    |
| ---------- | -- | -- |
| paths (optional) | {  } | paths coming from `router.query`

supposed to be a path/url refering to a file/page that can be represented with slashes in between |
| **Output** | `String`   |    |



## getLastPathsChunk()

returns the last chunk of the path


| Input      |    |    |
| ---------- | -- | -- |
| paths (optional) | {  } | paths coming from `router.query` |
| **Output** |    |    |



## 📄 getFullPath (exported const)

gets a path string from `next.js` `router.query`.


## 📄 getLastPathsChunk (exported const)

returns the last chunk of the path

