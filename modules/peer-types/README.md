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


# Internal

<details><summary>Show internal (8)</summary>
  
  # 🔸 Group

jsonMultiple model



A `Person` is able to be part of one or multiple `Group`s.
A `Device` without `Person` is just part of group `unidentified` and can only access `public` info and features.
`Group`s and individual `Person`s can be given `Authorization`

Functions that require authorization can have

`AUTH-[GROUP]: authorization1, authorization2, etc.` in their doc-comment





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| authorizations  | array |  |
| amountAuthenticationMethodsRequired (optional) | number |  |
| requiredAuthenticationMethods (optional) | array |  |



## 🔹 HandleObject

can be used on multiple models.








## 🔸 Persona

jsonMultiple model



Highly private model.

Configuration for a person identity that you say that is you.

As a OS user you can have multiple personas between which you can easily switch.

The difference from `Person` is that `Person` stores other people, whereas `Persona` stores different identities you give to yourself.

NB: brands should also be able to be personas, and since some brands are shared between people, you should be able to share Persona's with other `Person`s into their OS...

> Persona: A persona, depending on the context, is the public image of one's personality, the social role that one adopts, or simply a fictional character. The word derives from Latin, where it originally referred to a theatrical mask. On the social web, users develop virtual personas as online identities. (Wikipedia)





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| isPrimary (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| pictureImages (optional) | array |  |
| dataEntries  | array |  |
| interestSlugs (optional) | array |  |
| locationSlugs (optional) | array |  |
| spokenLanguages  | array |  |
| stripeSecret (optional) | string |  |
| twilioAccountSid (optional) | string |  |
| twilioAuthToken (optional) | string |  |
| twilioFromPhoneNumber (optional) | string |  |
| sendgridApiKey (optional) | string |  |
| sendgridFromEmail (optional) | string |  |
| githubEmail (optional) | string |  |
| githubAccessToken (optional) | string |  |
| githubOrganisation (optional) | string |  |
| useGithubOrganisation (optional) | boolean |  |
| mediaCredentials  | array |  |



## 🔸 PersonInformation

keyValueMarkdown model



categorisation model for informormation about a person

- the keys are the things you want to store
- the values are the descriptions of the thing to be stored
- the categories can organise the things you want to store better





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |
| parent_personInformationSlug (optional) | string |  |



## 🔸 PersonInformationValue

jsonMultiple model



key value data storage model for information about a person

- the filename must identify the person this is about (`personSlug`)
- the categories are the different people and the person information categories
- the keys are the person information datapoints
- the values are the values of the datapoints that you stored about this user

Example:

the file `person-information-values/abraham-lincoln.md` could contain something like this:

```md

## life

born: 11-01-1777
died: 20-12-1812


## identification

firstName: Abraham
lastName: Lincoln
```

NB: It's not going to be easy to keep this model in sync with the model it relies on!

TODO: figure out if this kan be a `KeyValueMarkdownModelType` or `MarkdownModelType`





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



## 🔸 PersonPlatformConnection

jsonMultiple model



Forgive the long name, but this model connects the user with the people they have a connection with on specific platforms

e.g. John Doe is connected with me on LinkedIn with the handle `johndoe123`

Not sure if this is the best way to do this, there may be limitations... For example, both I and the other person can have multiple social media accounts on a single platform





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
| personId  | string |  |
| isFollow  | boolean |  |
| scrapeSucceededAt  | number |  |
| scrapedFailedAt  | number |  |
| platformSlug  | string |  |
| platformConnectionId  | string |  |



## 🔹 PersonSocialMedia

media (mediums) that a person uses, e.g. linkedin, twitter, whatsapp, sms, calling, and irl





Properties: 

 | Name | Type | Description |
|---|---|---|
| platformSlug  | string |  |
| path  | string |  |
| isPremium  | boolean |  |
| tagline (optional) | string |  |
| bio (optional) | string |  |



## 🔸 Platform

jsonMultiple model



Collection of platforms that can be found on the internet

e.g. linkedin would have `userUrlPrefix: https://linkedin.com/in/` and `userUrlSuffix:""`





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| userUrlPrefix  | string |  |
| userUrlSuffix  | string |  |

  </details>

