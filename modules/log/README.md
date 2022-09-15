# Log

log (js operation)



# Outline

## Functions

- [getCallerFileName](#getCallerFileName)
- [log](#log)
- [parseTitle](#parseTitle)

## Interfaces:

- [GlobalLogConfig](#GlobalLogConfig)
- [LogConfig](#LogConfig)
- [LogType](#LogType)
- [OperationLogConfig](#OperationLogConfig)
- [ProjectLogConfig](#ProjectLogConfig)



# Functions

## getCallerFileName

TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show




## log

Log a message with a special type




### Parameters (3)

#### Parameter 1: message: string

> the message to be displayed to the user




#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string | The title of this log. If not given, a title will still be parsed from your message by taking the first sentence. |
| type (optional) | string | how should it look and feel? |
| customConfig (optional) | object | a logging configuration object that you can set using a file in the root of your operation or project. |



#### Parameter 3: data (optional): object

> Extra data the user needs to be able to see.




## parseTitle

TODO: Should parse a title from markdown


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | object |  |
| rest  | object |  |



### Parameters (1)

#### Parameter 1: markdown: string

# Interfaces

## GlobalLogConfig

a logging configuration object that you can set using a file in the root of your operation or project.



> a logging configuration object that you can set using a file in the root of your operation or project.

Properties: 

 | Name | Type | Description |
|---|---|---|
| showDebug (optional) | boolean |  |
| showDefault (optional) | boolean |  |
| sayTitles (optional) | boolean |  |
| logFolder (optional) | string | Folder where logs can be stored. If i can access the caller location this can be the operation db. |



## LogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string | The title of this log. If not given, a title will still be parsed from your message by taking the first sentence. |
| type (optional) | string | how should it look and feel? |
| customConfig (optional) | object | a logging configuration object that you can set using a file in the root of your operation or project. |



## LogType

how should it look and feel?



> how should it look and feel?




## OperationLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object | a logging configuration object that you can set using a file in the root of your operation or project. |
| fileConfig (optional) | object |  |
| functionConfig (optional) | object |  |



## ProjectLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object | a logging configuration object that you can set using a file in the root of your operation or project. |
| operationConfig  | object |  |


