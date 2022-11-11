# Himalayajeep functions

himalayajeep-functions (`OperationClassification` node)



# Api reference

# Internal

<details><summary>Show internal (10)</summary>
    
  # driverLogin()

login form for the driver to login


| Input      |    |    |
| ---------- | -- | -- |
| emailOrPhone | string |  |,| password | string |  |
| **Output** |    |    |



## driverSignup()

Driver signup


| Input      |    |    |
| ---------- | -- | -- |
| driverInfo | `SignupJeepType` |  |
| **Output** |    |    |



## getMyJeep()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |
| **Output** |    |    |



## getPublicJeeps()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updateMyProfile()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |,| myJeep | { citizenshipImage?: `BackendAsset`, <br />driverLicenseImage?: `BackendAsset`, <br />amountSeatsLeft: number, <br />amountLuggageUnitsLeft: number, <br />note: string, <br />locationsCalculated?: `LocationType`[], <br />name: string, <br />email?: string, <br />phone?: string, <br /> } |  |
| **Output** |    |    |



## 📄 driverLogin (exported const)

login form for the driver to login


## 📄 driverSignup (exported const)

Driver signup


## 📄 getMyJeep (exported const)

## 📄 getPublicJeeps (exported const)

## 📄 updateMyProfile (exported const)

  </details>

