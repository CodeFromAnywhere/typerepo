# Himalayajeep functions

himalayajeep-functions (`OperationClassification` node-cjs)



# Api reference

## driverLogin()

login form for the driver to login


| Input      |    |    |
| ---------- | -- | -- |
| emailOrPhone | string |  |,| password | string |  |
| **Output** |    |    |



## 📄 driverLogin (exported const)

login form for the driver to login

# Internal

<details><summary>Show internal (9)</summary>
    
  # driverSignup()

Driver signup


| Input      |    |    |
| ---------- | -- | -- |
| driverInfo | `SignupJeepType` |  |
| **Output** |    |    |



## earthDistance()

/**
 * returns the distance between two places (not very precise but it's very efficient)
 */


| Input      |    |    |
| ---------- | -- | -- |
| lat1 | number |  |,| long1 | number |  |,| lat2 | number |  |,| long2 | number |  |,| response (optional) | m / km |  |
| **Output** |    |    |



## getMyJeep()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |
| **Output** |    |    |



## getPublicJeeps()

| Input      |    |    |
| ---------- | -- | -- |
| position (optional) | `Position` |  |
| **Output** |    |    |



## updateMyProfile()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |,| myJeep | { citizenshipImage?: `BackendAsset`, <br />driverLicenseImage?: `BackendAsset`, <br />amountSeatsLeft: number, <br />amountLuggageUnitsLeft: number, <br />note: string, <br />locationsCalculated?: `LocationType`[], <br />name: string, <br />email?: string, <br />phone?: string, <br /> } |  |
| **Output** |    |    |



## 📄 driverSignup (exported const)

Driver signup


## 📄 getMyJeep (exported const)

## 📄 getPublicJeeps (exported const)

## 📄 updateMyProfile (exported const)

  </details>

