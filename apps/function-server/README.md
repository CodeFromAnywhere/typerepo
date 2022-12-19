# Function server

function-server (`OperationClassification` server-cjs)

Server that exposes all typerepo api functions wrapped into easily accessible endpoints.




# Api reference

# CLI

<details><summary>Show CLI information (4)</summary>
    
  # runFunctionServerCli()

Argument:
- pass true if you want the server to be watching
- pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
- if you pass nothing, there will be no browser start and no watcher


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerDevCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 runFunctionServerCli (unexported const)

Argument:
- pass true if you want the server to be watching
- pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
- if you pass nothing, there will be no browser start and no watcher


## 📄 runFunctionServerDevCli (exported const)

  </details>

# Internal

<details><summary>Show internal (13)</summary>
    
  # executeCronFunction()

NB: cron functions cannot have parameters


| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |
| **Output** |    |    |



## runFunctionServerDevCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerDev()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServer()

runs sdk api server using "server" package.

server will be exposed on port 42000


| Input      |    |    |
| ---------- | -- | -- |
| isWatching (optional) | boolean |  |,| isRestart (optional) | boolean |  |
| **Output** |    |    |



## scheduleCronJobs()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## startSearchWebIfAvailable()

| Input      |    |    |
| ---------- | -- | -- |
| isWatching (optional) | boolean |  |,| isRestart (optional) | boolean |  |
| **Output** |    |    |



## 📄 executeCronFunction (exported const)

NB: cron functions cannot have parameters


## 📄 runFunctionServerDevCli (exported const)

## 📄 runFunctionServerDev (exported const)

## 📄 runFunctionServer (exported const)

runs sdk api server using "server" package.

server will be exposed on port 42000


## 📄 scheduleCronJobs (exported const)

## 📄 scheduleObject (exported const)

For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`


## 📄 startSearchWebIfAvailable (exported const)

  </details>

