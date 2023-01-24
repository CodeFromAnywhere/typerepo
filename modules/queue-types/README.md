# Queue types

queue-types (`OperationClassification` undefined)



# Api reference

## 🔸 Queue

jsonMultiple model



Model for a Queue system so you can execute functions when ram/internet is available





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| functionName  | string |  |
| parameters  | array |  |
| result (optional) | object |  |
| startedAt (optional) | number |  |
| shouldKeepOnCompleted (optional) | boolean |  |
| completedAt (optional) | number |  |
| statusMessage (optional) | string |  |
| priority (optional) | string |  |
| notifyLateAfterSeconds (optional) | number |  |
| hasNotifiedLate (optional) | boolean |  |
| shouldNotifyOnResult (optional) | boolean |  |
| executionAuthToken (optional) | string |  |


