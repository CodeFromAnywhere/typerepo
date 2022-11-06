# Sms

sms (node operation)



# Outline

## Functions

- [sendSms](#sendSms)

## Variables

- [sendSms](#sendsms)



# Functions

## sendSms

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`




### Parameters (1)

#### Parameter 1: options: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| addressRetention (optional) | string |  |
| applicationSid (optional) | string |  |
| attempt (optional) | number |  |
| body (optional) | string |  |
| contentRetention (optional) | string |  |
| contentSid (optional) | string |  |
| contentVariables (optional) | string |  |
| forceDelivery (optional) | boolean |  |
| from (optional) | string |  |
| maxPrice (optional) | number |  |
| mediaUrl (optional) | object |  |
| messagingServiceSid (optional) | string |  |
| persistentAction (optional) | object |  |
| provideFeedback (optional) | boolean |  |
| scheduleType (optional) | string |  |
| sendAsMms (optional) | boolean |  |
| sendAt (optional) | string |  |
| shortenUrls (optional) | boolean |  |
| smartEncoded (optional) | boolean |  |
| statusCallback (optional) | string |  |
| to  | string |  |
| validityPeriod (optional) | number |  |


# Variables

## sendSms (exported const)

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`

