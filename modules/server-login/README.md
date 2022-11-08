# Server login

server-login (node operation)

This operation exposes rudimentary functions to set cookies from the backend. We require cookies in order to authenticate a user for GET requests. Cookies are sent to the server for every request and are a safer way, because they are not part of the URL that can be found in the browser history.

This thing is far from finished, see `todo/` for what needs to be done.




# Api reference

## comparePassword()

Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`


| Input      |    |    |
| ---------- | -- | -- |
| rawPassword | string |  |,| encryptedPassword | string |  |
| **Output** |    |    |



## encryptPassword()

Method to encrypt any password. Uses `bcrypt`


| Input      |    |    |
| ---------- | -- | -- |
| rawPassword | string |  |
| **Output** |    |    |



## isValidPassword()

| Input      |    |    |
| ---------- | -- | -- |
| password | string |  |
| **Output** | {  }   |    |



## 🔹 LogoutResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |



## 📄 comparePassword (exported const)

Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`


## 📄 encryptPassword (exported const)

Method to encrypt any password. Uses `bcrypt`


## 📄 isValidPassword (exported const)

# Internal

<details><summary>Show internal (21)</summary>
  
  # addAuthenticationMethod()

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## addDeviceAuthenticatedMethod()

sends an email or sms, or already confirms in case of emailPassword


TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


| Input      |    |    |
| ---------- | -- | -- |
| deviceId | string |  |,| method | `AuthenticationMethodMethod` |  |,| handle | string | most of the time, this is a username, but can also be phone number or email or so |,| credential (optional) | string |  |
| **Output** |    |    |



## addDeviceAuthenticationMethodConfirm()

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`


| Input      |    |    |
| ---------- | -- | -- |
| deviceId | string | device id |,| method | `AuthenticationMethodMethod` |  |,| otp | number | one time password |
| **Output** |    |    |



## addPersonAuthenticationMethod()

adds an `authenticationMethod` to `Person`

relies on `addAuthenticationMethod`

TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## isPhoneNumber()

TODO: Implement this


| Input      |    |    |
| ---------- | -- | -- |
| phoneNumber | string |  |
| **Output** | {  }   |    |



## login()

attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.


| Input      |    |    |
| ---------- | -- | -- |
| deviceId | string |  |
| **Output** |    |    |



## logoutPostApi()

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removeDeviceAuthenticationMethod()

removes an `authenticatedMethod` from `Device`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removePersonAuthenticationMethod()

removes an `authenticationMethod` from `Person`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## signup()

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done if authentication is not applied on an existing person already.
- Can only be done with at least one authenticationMethod
- Function is wrappable


| Input      |    |    |
| ---------- | -- | -- |
| deviceId | string |  |,| personData | { authorizations: `Authorization`[], <br />credits: number, <br />dataEntries: `PersonInformationValue`[], <br />interestSlugs: `Slug`[], <br />media: `PersonSocialMedia`[], <br />name: string, <br />slug: string, <br />pictureImage: `BackendAsset`, <br />groupSlugs?: `Slug`[], <br />requiredAuthenticationMethods?: `AuthenticationMethodMethod`[], <br />amountAuthenticationMethodsRequired?: number, <br /> } | Data required for creating a `Person`. Can be filled in by the user partly, but also partly automatically |
| **Output** |    |    |



## 🔹 LoginResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |



## 📄 addAuthenticationMethod (exported const)

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`


## 📄 addDeviceAuthenticatedMethod (exported const)

sends an email or sms, or already confirms in case of emailPassword


TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


## 📄 addDeviceAuthenticationMethodConfirm (exported const)

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`


## 📄 addPersonAuthenticationMethod (exported const)

adds an `authenticationMethod` to `Person`

relies on `addAuthenticationMethod`

TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.


## 📄 isPhoneNumber (exported const)

TODO: Implement this


## 📄 login (exported const)

attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.


## 📄 logoutPostApi (exported const)

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


## 📄 removeDeviceAuthenticationMethod (exported const)

removes an `authenticatedMethod` from `Device`


## 📄 removePersonAuthenticationMethod (exported const)

removes an `authenticationMethod` from `Person`


## 📄 signup (exported const)

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done if authentication is not applied on an existing person already.
- Can only be done with at least one authenticationMethod
- Function is wrappable
  </details>

