# Peer types

peer-types (js operation)



# Api reference

## 🔸 Device

jsonMultiple model



A Device that accesses any King OS api.

A device can be connected to a person. A person can have multiple `Device`s.

A Device does not necissarily have King OS installed themselves, they can also be a visitor to another King OS app of someone else.





Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| position (optional) | object |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| authToken  | string |  |
| userAgent  | object |  |
| userAgentString  | string |  |
| name  | string |  |
| previousIps  | array |  |
| origins  | array |  |
| hasPapi (optional) | boolean |  |
| isOnlineCalculated (optional) | boolean |  |
| lastOnlineAt  | number |  |
| isLocalIpCalculated (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| isPrivate (optional) | boolean |  |
| lastSyncDatabaseAtObject  | object |  |
| personIds (optional) | array |  |
| currentPersonId (optional) | string |  |
| appOperationsCalculated (optional) | array |  |
| authenticationMethods  | array |  |



## 🔸 PeerMessage

jsonMultiple model



DEPRECTATED: should be replaced by `MediaPost`. MediaPost can  have many channels, and this is just one of them





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
| categoryStackCalculated (optional) | array |  |
| peerSlug  | string |  |
| message  | string |  |



## 🔹 AppOperation

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| port  | number |  |
| description (optional) | string |  |
| isOnline (optional) | boolean |  |
| emoji (optional) | string |  |



## 🔹 AuthenticationMethod

Properties: 

 | Name | Type | Description |
|---|---|---|
| method  | string |  |
| handle  | string |  |
| encryptedCredential (optional) | string |  |
| otp (optional) | number |  |
| isAuthenticated  | boolean |  |



## 🔹 AuthenticationMethodMethod

Username + password should be the default

Email OTP, phone number OTP (sms or call or whatsapp), should be optional 2FA methods

All others can also act as authentication methods, but the token shouldn't be stored








## 🔹 IPInfo

Information that is inferred from an IP





Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| position (optional) | object |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |



## 🔸 PageVisit

jsonMultiple model



Any visit tracked based on a server request

NB: TODO: it might occur that a page fetches multiple api endpoints, which will create duplicate data here. How do I fix that?





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
| categoryStackCalculated (optional) | array |  |
| deviceId  | string |  |
| path  | string |  |
| ipInfo  | object |  |



## 🔸 Person

jsonMultiple model



Model to describe a human person. This model gathers and stores all persons around the world, except for yourself. Kind of a user-like model...


The data inside this model is coming from the `Person` itself but also from the owner of the OS server. It should be possible for the person to automatically push information into any of their instances on any server, but the OS owner can augment this.

NB: This is a `DefaultModelType`, which means name and slug need not to be unique, but it is highly preferred.





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
| categoryStackCalculated (optional) | array |  |
| name  | string |  |
| slug  | string |  |
| pictureImage  | object |  |
| interestSlugs  | array |  |
| dataEntries  | array |  |
| media  | array |  |
| preferredContactMedium (optional) | string |  |
| devicesCalculated (optional) | array |  |
| authenticationMethods  | array |  |
| groupSlugs (optional) | array |  |
| authorizations  | array |  |
| amountAuthenticationMethodsRequired (optional) | number |  |
| requiredAuthenticationMethods (optional) | array |  |
| credits  | number |  |


