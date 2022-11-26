# Peer functions

peer-functions (`OperationClassification` node-cjs)



# Api reference

## isPortUsed()

Checks if a port is used or not


| Input      |    |    |
| ---------- | -- | -- |
| port | number |  |
| **Output** |    |    |



## 📄 isPortUsed (exported const)

Checks if a port is used or not

# Tests

<details><summary>Show test information(4)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (40)</summary>
    
  # addPeerMessage()




| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |,| peerSlug | string |  |
| **Output** |    |    |



## addPeer()

TODO:


| Input      |    |    |
| ---------- | -- | -- |
| ip | string |  |,| authToken | string |  |,| peerName (optional) | string |  |,| force (optional) | boolean | If true, it does not validate the IP to see if it is online and it is authorized... |,| isMe (optional) | boolean |  |
| **Output** |    |    |



## augmentDevice()

| Input      |    |    |
| ---------- | -- | -- |
| x | `Device` |  |
| **Output** | {  }   |    |



## deviceGetAppsCalculated()

| Input      |    |    |
| ---------- | -- | -- |
| device | `Device` |  |
| **Output** |    |    |



## getAllAppOperations()

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getAugmentedPersons()

| Input      |    |    |
| ---------- | -- | -- |
| devices | `Device`[] |  |,| config (optional) | { onlyWithDevices?: boolean, <br />onlyWithPapi?: boolean, <br />onlyOnline?: boolean, <br />withAppsCalculated?: boolean, <br /> } |  |
| **Output** |    |    |



## getFirstEmoji()

| Input      |    |    |
| ---------- | -- | -- |
| text (optional) | string |  |
| **Output** | string   |    |



## getNestedPathObject()

| Input      |    |    |
| ---------- | -- | -- |
| baseFolderPath | string |  |
| **Output** |    |    |



## getPeerMessages()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPeerPeople()

Get persons with devices that have papi and their apps calculated, sorted


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPeersFromPeersRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPublicFolderNestedPathObjectFromPeer()

Peer = {
name: "22.2.2.2.2.2",
slug: "22-22-22-22"
}


| Input      |    |    |
| ---------- | -- | -- |
| peerSlug | string |  |
| **Output** |    |    |



## getPublicFolderNestedPathObject()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPublicPeers()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## lateFetchPeerMessageSync()

Should sync messages from all peers that are online into your database


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## ping()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## proactivePushAddPeerMessage()

Adds a message to your own peer messages database, but also to the db of all your peers that are online currently


| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |,| peerSlug | string |  |
| **Output** |    |    |



## removePeer()

TODO: connect with peoples


| Input      |    |    |
| ---------- | -- | -- |
| id | string |  |
| **Output** |    |    |



## sortDevices()

Only works if isOnlineCalculated is set (using augmentDevice)

Sorts device: first favorite, then online, then offline


| Input      |    |    |
| ---------- | -- | -- |
| a | `Device` |  |,| b | `Device` |  |
| **Output** |  /    |    |



## updatePeer()

Update one of your peers


| Input      |    |    |
| ---------- | -- | -- |
| slug | string |  |,| updatedValues | { name?: string, <br />description?: string, <br />authToken?: string, <br />isFavorite?: boolean, <br />isMe?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 addPeerMessage (exported const)

## 📄 addPeer (exported const)

TODO:


## 📄 augmentDevice (exported const)

## 📄 deviceGetAppsCalculated (exported const)

## 📄 getAllAppOperations (exported const)

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


## 📄 getAugmentedPersons (exported const)

## 📄 getFirstEmoji (exported const)

## 📄 getNestedPathObject (exported const)

## 📄 getPeerMessages (exported const)

## 📄 getPeerPeople (exported const)

Get persons with devices that have papi and their apps calculated, sorted


## 📄 getPeersFromPeersRecursively (exported const)

## 📄 getPublicFolderNestedPathObjectFromPeer (exported const)

Peer = {
name: "22.2.2.2.2.2",
slug: "22-22-22-22"
}


## 📄 getPublicFolderNestedPathObject (exported const)

## 📄 getPublicPeers (exported const)

## 📄 lateFetchPeerMessageSync (exported const)

Should sync messages from all peers that are online into your database


## 📄 ping (exported const)

## 📄 proactivePushAddPeerMessage (exported const)

Adds a message to your own peer messages database, but also to the db of all your peers that are online currently


## 📄 removePeer (exported const)

TODO: connect with peoples


## 📄 sortDevices (exported const)

Only works if isOnlineCalculated is set (using augmentDevice)

Sorts device: first favorite, then online, then offline


## 📄 updatePeer (exported const)

Update one of your peers
  </details>

