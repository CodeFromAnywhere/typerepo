# Pm 2 util

pm2-util (`OperationClassification` node-cjs)

Wrapper around pm2 to easily manage proceses within King OS




# Api reference

# CLI

<details><summary>Show CLI information (12)</summary>
    
  # deleteAppCli()

Arguments
- Operation Name


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## listAppsCli()

Arguments:none


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## restartAppCli()

Arguments
- Operation Name


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## startAppCli()

Arguments
- Operation Name
- isDev (true)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## stopAllAppsExceptCli()

Arguments: operation names that you don't want to stop


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## stopAppsCli()

Arguments
- Operation Names to stop


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 deleteAppCli (unexported const)

Arguments
- Operation Name


## 📄 listAppsCli (unexported const)

Arguments:none


## 📄 restartAppCli (unexported const)

Arguments
- Operation Name


## 📄 startAppCli (unexported const)

Arguments
- Operation Name
- isDev (true)


## 📄 stopAllAppsExceptCli (unexported const)

Arguments: operation names that you don't want to stop


## 📄 stopAppsCli (unexported const)

Arguments
- Operation Names to stop
  </details>

# Internal

<details><summary>Show internal (21)</summary>
    
  # deleteApp()

Deletes an app from the pm2

TODO: for some reason it says `error: Error: process or namespace not found` even though it certainly exists. I can't figure out why it's not working.


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## listApps()

Lists the apps in pm2


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## logApp()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## logTableObject()

| Input      |    |    |
| ---------- | -- | -- |
| object (optional) | {  } |  |
| **Output** |    |    |



## pm2ConnectDisconnect()

Function that lets you connect, execute a pm2 action, and disconnect after


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## pm2Connect()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## restartApp()

Restarts an app with pm2


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## startApp()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| isDev (optional) | boolean |  |
| **Output** |    |    |



## stopAllAppsExcept()

Stops all apps except some specified ones


| Input      |    |    |
| ---------- | -- | -- |
| ignore (optional) | string[] |  |
| **Output** |    |    |



## stopApps()

Stops an app with pm2

TODO: for some reason i'm getting `TypeError: Cannot read properties of undefined (reading '_operate')` and I can't find why because all other commands mostly work and I'm doing it the same way.


| Input      |    |    |
| ---------- | -- | -- |
| operationNames | string[] |  |
| **Output** |    |    |



## 📄 appPrefix (exported const)

## 📄 deleteApp (exported const)

Deletes an app from the pm2

TODO: for some reason it says `error: Error: process or namespace not found` even though it certainly exists. I can't figure out why it's not working.


## 📄 listApps (exported const)

Lists the apps in pm2


## 📄 logApp (exported const)

## 📄 logTableObject (exported const)

## 📄 pm2ConnectDisconnect (exported const)

Function that lets you connect, execute a pm2 action, and disconnect after


## 📄 pm2Connect (exported const)

## 📄 restartApp (exported const)

Restarts an app with pm2


## 📄 startApp (exported const)

## 📄 stopAllAppsExcept (exported const)

Stops all apps except some specified ones


## 📄 stopApps (exported const)

Stops an app with pm2

TODO: for some reason i'm getting `TypeError: Cannot read properties of undefined (reading '_operate')` and I can't find why because all other commands mostly work and I'm doing it the same way.
  </details>

