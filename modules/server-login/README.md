# Server login

server-login (node operation)

This operation exposes rudimentary functions to set cookies from the backend. We require cookies in order to authenticate a user for GET requests. Cookies are sent to the server for every request and are a safer way, because they are not part of the URL that can be found in the browser history.

This thing is far from finished, see `todo/` for what needs to be done.




# Outline

## Functions

- [addAuthenticationMethod](#addAuthenticationMethod)
- [addDeviceAuthenticatedMethod](#addDeviceAuthenticatedMethod)
- [addDeviceAuthenticationMethodConfirm](#addDeviceAuthenticationMethodConfirm)
- [addPersonAuthenticationMethod](#addPersonAuthenticationMethod)
- [comparePassword](#comparePassword)
- [encryptPassword](#encryptPassword)
- [isPhoneNumber](#isPhoneNumber)
- [isValidPassword](#isValidPassword)
- [login](#login)
- [logoutPostApi](#logoutPostApi)
- [removeDeviceAuthenticationMethod](#removeDeviceAuthenticationMethod)
- [removePersonAuthenticationMethod](#removePersonAuthenticationMethod)
- [signup](#signup)

## Interfaces

- [AuthenticationMethodMethod](#authenticationmethodmethod)
- [LoginResult](#loginresult)
- [LogoutResult](#logoutresult)

## Variables

- [addAuthenticationMethod](#addauthenticationmethod)
- [addDeviceAuthenticatedMethod](#adddeviceauthenticatedmethod)
- [addDeviceAuthenticationMethodConfirm](#adddeviceauthenticationmethodconfirm)
- [addPersonAuthenticationMethod](#addpersonauthenticationmethod)
- [comparePassword](#comparepassword)
- [encryptPassword](#encryptpassword)
- [isPhoneNumber](#isphonenumber)
- [isValidPassword](#isvalidpassword)
- [login](#login)
- [logoutPostApi](#logoutpostapi)
- [removeDeviceAuthenticationMethod](#removedeviceauthenticationmethod)
- [removePersonAuthenticationMethod](#removepersonauthenticationmethod)
- [signup](#signup)



# Functions

## addAuthenticationMethod

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`




## addDeviceAuthenticatedMethod

sends an email or sms, or already confirms in case of emailPassword


TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.




### Parameters (4)

#### Parameter 1: deviceId: string

#### Parameter 2: method: string(Enum: usernamePassword | phoneNumber | email | apple | google | facebook | twitter | linkedin | github)

#### Parameter 3: handle: string

#### Parameter 4: credential (optional): string

## addDeviceAuthenticationMethodConfirm

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`




### Parameters (3)

#### Parameter 1: deviceId: string

#### Parameter 2: method: string(Enum: usernamePassword | phoneNumber | email | apple | google | facebook | twitter | linkedin | github)

#### Parameter 3: otp: number

## addPersonAuthenticationMethod

adds an `authenticationMethod` to `Person`

relies on `addAuthenticationMethod`

TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.




## comparePassword

Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`




### Parameters (2)

#### Parameter 1: rawPassword: string

#### Parameter 2: encryptedPassword: string

## encryptPassword

Method to encrypt any password. Uses `bcrypt`




### Parameters (1)

#### Parameter 1: rawPassword: string

## isPhoneNumber

TODO: Implement this


### Returns: object

### Parameters (1)

#### Parameter 1: phoneNumber: string

## isValidPassword

### Returns: object

### Parameters (1)

#### Parameter 1: password: string

## login

attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.




### Parameters (1)

#### Parameter 1: deviceId: string

## logoutPostApi

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)




## removeDeviceAuthenticationMethod

removes an `authenticatedMethod` from `Device`




## removePersonAuthenticationMethod

removes an `authenticationMethod` from `Person`




## signup

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done if authentication is not applied on an existing person already.
- Can only be done with at least one authenticationMethod
- Function is wrappable




### Parameters (2)

#### Parameter 1: deviceId: string

#### Parameter 2: personData: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| authorizations  | array |  |
| credits  | number |  |
| dataEntries  | array |  |
| interestSlugs  | array |  |
| media  | array |  |
| name  | string |  |
| slug  | string |  |
| groupSlugs (optional) | array |  |
| requiredAuthenticationMethods (optional) | array |  |
| amountAuthenticationMethodsRequired (optional) | number |  |


# Interfaces

## AuthenticationMethodMethod

Username + password should be the default

Email OTP, phone number OTP (sms or call or whatsapp), should be optional 2FA methods

All others can also act as authentication methods, but the token shouldn't be stored








## LoginResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |



## LogoutResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |


# Variables

## addAuthenticationMethod (exported const)

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`


## addDeviceAuthenticatedMethod (exported const)

sends an email or sms, or already confirms in case of emailPassword


TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


## addDeviceAuthenticationMethodConfirm (exported const)

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`


## addPersonAuthenticationMethod (exported const)

adds an `authenticationMethod` to `Person`

relies on `addAuthenticationMethod`

TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


## comparePassword (exported const)

Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`


## encryptPassword (exported const)

Method to encrypt any password. Uses `bcrypt`


## isPhoneNumber (exported const)

TODO: Implement this


## isValidPassword (exported const)

## login (exported const)

attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.


## logoutPostApi (exported const)

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


## removeDeviceAuthenticationMethod (exported const)

removes an `authenticatedMethod` from `Device`


## removePersonAuthenticationMethod (exported const)

removes an `authenticationMethod` from `Person`


## signup (exported const)

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done if authentication is not applied on an existing person already.
- Can only be done with at least one authenticationMethod
- Function is wrappable

