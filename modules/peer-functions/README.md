# Peer functions

peer-functions (`OperationClassification` node-cjs)



# Api reference

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

<details><summary>Show internal (34)</summary>
    
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



## getAllAppOperations()

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
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
| - | | |
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



## isPortUsed()

Checks if a port is used or not


| Input      |    |    |
| ---------- | -- | -- |
| port | number |  |
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
| - | | |
| **Output** |    |    |



## removePeer()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updatePeer()

Update one of your peers


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 addPeerMessage (exported const)

## 📄 addPeer (exported const)

TODO:


## 📄 augmentDevice (exported const)

## 📄 getAllAppOperations (exported const)

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


## 📄 getFirstEmoji (exported const)

## 📄 getNestedPathObject (exported const)

## 📄 getPeerMessages (exported const)

## 📄 getPeersFromPeersRecursively (exported const)

## 📄 getPublicFolderNestedPathObjectFromPeer (exported const)

Peer = {
name: "22.2.2.2.2.2",
slug: "22-22-22-22"
}


## 📄 getPublicFolderNestedPathObject (exported const)

## 📄 getPublicPeers (exported const)

## 📄 isPortUsed (exported const)

Checks if a port is used or not


## 📄 lateFetchPeerMessageSync (exported const)

Should sync messages from all peers that are online into your database


## 📄 ping (exported const)

## 📄 proactivePushAddPeerMessage (exported const)

Adds a message to your own peer messages database, but also to the db of all your peers that are online currently


## 📄 removePeer (exported const)

## 📄 updatePeer (exported const)

Update one of your peers
  </details>

