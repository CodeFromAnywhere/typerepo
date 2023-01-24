# Lock util

lock-util (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (6)</summary>
    
  # isLocked()




| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | {  }   |    |



## lock()

either creates the lockfile if it didn't exist or it will update it with new updatedAt and status. If status isn't set, status will be removed


| Input      |    |    |
| ---------- | -- | -- |
| aboluteLockableFilePath | string |  |,| status (optional) | string |  |
| **Output** |    |    |



## unlock()

NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from


| Input      |    |    |
| ---------- | -- | -- |
| aboluteLockedFilePath | string |  |
| **Output** |    |    |



## 📄 isLocked (exported const)

## 📄 lock (exported const)

either creates the lockfile if it didn't exist or it will update it with new updatedAt and status. If status isn't set, status will be removed


## 📄 unlock (exported const)

NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from
  </details>

