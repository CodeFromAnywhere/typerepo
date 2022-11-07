# Peer functions

peer-functions (node operation)



# Outline

## Functions

- [addPeerMessage](#addPeerMessage)
- [addPeer](#addPeer)
- [getAllAppOperations](#getAllAppOperations)
- [getFirstEmoji](#getFirstEmoji)
- [getNestedPathObject](#getNestedPathObject)
- [getPeerMessages](#getPeerMessages)
- [getPeersFromPeersRecursively](#getPeersFromPeersRecursively)
- [getPeers](#getPeers)
- [getPublicFolderNestedPathObjectFromPeer](#getPublicFolderNestedPathObjectFromPeer)
- [getPublicFolderNestedPathObject](#getPublicFolderNestedPathObject)
- [getPublicPeers](#getPublicPeers)
- [isPortUsed](#isPortUsed)
- [lateFetchPeerMessageSync](#lateFetchPeerMessageSync)
- [ping](#ping)
- [proactivePushAddPeerMessage](#proactivePushAddPeerMessage)
- [removePeer](#removePeer)
- [updatePeer](#updatePeer)

## Variables

- [addPeerMessage](#addpeermessage)
- [addPeer](#addpeer)
- [getAllAppOperations](#getallappoperations)
- [getFirstEmoji](#getfirstemoji)
- [getNestedPathObject](#getnestedpathobject)
- [getPeerMessages](#getpeermessages)
- [getPeersFromPeersRecursively](#getpeersfrompeersrecursively)
- [getPeers](#getpeers)
- [getPublicFolderNestedPathObjectFromPeer](#getpublicfoldernestedpathobjectfrompeer)
- [getPublicFolderNestedPathObject](#getpublicfoldernestedpathobject)
- [getPublicPeers](#getpublicpeers)
- [isPortUsed](#isportused)
- [lateFetchPeerMessageSync](#latefetchpeermessagesync)
- [ping](#ping)
- [proactivePushAddPeerMessage](#proactivepushaddpeermessage)
- [removePeer](#removepeer)
- [updatePeer](#updatepeer)



# Functions

## addPeerMessage()

| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |,| peerSlug | string |  |
| **Output** |    |    |



## addPeer()

| Input      |    |    |
| ---------- | -- | -- |
| ip | string |  |,| authToken (optional) | string |  |,| peerName (optional) | string |  |,| force (optional) | boolean | If true, it does not validate the IP to see if it is online and it is authorized... |,| isMe (optional) | boolean |  |
| **Output** |    |    |



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



## getPeers()

Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)


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
| message | string |  |,| peerSlug | string |  |
| **Output** |    |    |



## removePeer()

| Input      |    |    |
| ---------- | -- | -- |
| slug | string | Slug of the peer (ip) |
| **Output** |    |    |



## updatePeer()

Update one of your peers


| Input      |    |    |
| ---------- | -- | -- |
| slug | string |  |,| updatedValues | { name?: string, <br />description?: string, <br />authToken?: string, <br />isFavorite?: boolean, <br />isMe?: boolean, <br /> } |  |
| **Output** |    |    |


# Variables

## 📄 addPeerMessage (exported const)

## 📄 addPeer (exported const)

## 📄 getAllAppOperations (exported const)

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


## 📄 getFirstEmoji (exported const)

## 📄 getNestedPathObject (exported const)

## 📄 getPeerMessages (exported const)

## 📄 getPeersFromPeersRecursively (exported const)

## 📄 getPeers (exported const)

Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)


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

