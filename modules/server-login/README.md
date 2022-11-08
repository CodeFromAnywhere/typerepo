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

