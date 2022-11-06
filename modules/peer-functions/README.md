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
- [main](#main)
- [ping](#ping)
- [proactivePushAddPeerMessage](#proactivePushAddPeerMessage)
- [removePeer](#removePeer)
- [test](#test)
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
- [main](#main)
- [ping](#ping)
- [proactivePushAddPeerMessage](#proactivepushaddpeermessage)
- [removePeer](#removepeer)
- [test](#test)
- [updatePeer](#updatepeer)



# Functions

## addPeerMessage

### Parameters (2)

#### Parameter 1: message: string

#### Parameter 2: peerSlug: string

## addPeer

### Parameters (5)

#### Parameter 1: ip: string

#### Parameter 2: authToken (optional): string

#### Parameter 3: peerName (optional): string

#### Parameter 4: force (optional): boolean

#### Parameter 5: isMe (optional): boolean

## getAllAppOperations

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not




## getFirstEmoji

### Returns: string

### Parameters (1)

#### Parameter 1: text (optional): string

## getNestedPathObject

### Parameters (1)

#### Parameter 1: baseFolderPath: string

## getPeerMessages

## getPeersFromPeersRecursively

## getPeers

Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)




## getPublicFolderNestedPathObjectFromPeer

Peer = {
name: "22.2.2.2.2.2",
slug: "22-22-22-22"
}




### Parameters (1)

#### Parameter 1: peerSlug: string

## getPublicFolderNestedPathObject

## getPublicPeers

## isPortUsed

Checks if a port is used or not




### Parameters (1)

#### Parameter 1: port: number

## lateFetchPeerMessageSync

Should sync messages from all peers that are online into your database




## main

## ping

### Returns: object

## proactivePushAddPeerMessage

Adds a message to your own peer messages database, but also to the db of all your peers that are online currently




### Parameters (2)

#### Parameter 1: message: string

#### Parameter 2: peerSlug: string

## removePeer

### Parameters (1)

#### Parameter 1: slug: string

## test

## updatePeer

Update one of your peers




### Parameters (2)

#### Parameter 1: slug: string

#### Parameter 2: updatedValues: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name (optional) | string |  |
| description (optional) | string |  |
| authToken (optional) | string |  |
| isFavorite (optional) | boolean |  |
| isMe (optional) | boolean |  |


# Variables

## addPeerMessage (exported const)

## addPeer (exported const)

## getAllAppOperations (exported const)

Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not


## getFirstEmoji (exported const)

## getNestedPathObject (exported const)

## getPeerMessages (exported const)

## getPeersFromPeersRecursively (exported const)

## getPeers (exported const)

Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)


## getPublicFolderNestedPathObjectFromPeer (exported const)

Peer = {
name: "22.2.2.2.2.2",
slug: "22-22-22-22"
}


## getPublicFolderNestedPathObject (exported const)

## getPublicPeers (exported const)

## isPortUsed (exported const)

Checks if a port is used or not


## lateFetchPeerMessageSync (exported const)

Should sync messages from all peers that are online into your database


## main (unexported const)

## ping (exported const)

## proactivePushAddPeerMessage (exported const)

Adds a message to your own peer messages database, but also to the db of all your peers that are online currently


## removePeer (exported const)

## test (unexported const)

## updatePeer (exported const)

Update one of your peers

