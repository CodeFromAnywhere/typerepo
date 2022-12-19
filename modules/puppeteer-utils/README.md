# Puppeteer utils

puppeteer-utils (`OperationClassification` cjs)



# Api reference

## getChromeExecutablePath()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | /usr/bin/google-chrome-stable / /Applications/Google Chrome.app/Contents/MacOS/Google Chrome   |    |



## 📄 getChromeExecutablePath (exported const)

## typeInTheInputField()

Help to type in the field in given selector by setting value


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br />value: string, <br /> } |  |
| **Output** |    |    |



## 📄 typeInTheInputField (exported const)

Help to type in the field in given selector by setting value


## facebookLogin()

takes facebook credentials and login to facebook


| Input      |    |    |
| ---------- | -- | -- |
| props | `FacebookLoginPropsType` |  |
| **Output** |    |    |



## 📄 facebookLogin (exported const)

## clickOnSpanTag()

it takes the current page and span text and its click on the text span


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />spanText: string, <br /> } |  |
| **Output** |    |    |



## gmailLogin()

Helps to login into gmail account


| Input      |    |    |
| ---------- | -- | -- |
| props | `GmailLoginPropsType` |  |
| **Output** |    |    |



## isCaptchaExist()

| Input      |    |    |
| ---------- | -- | -- |
| page | `Page` |  |
| **Output** |    |    |



## openPage()

| Input      |    |    |
| ---------- | -- | -- |
| pageId (optional) | string |  |
| **Output** |    |    |



## setBrowserPageIdle()

| Input      |    |    |
| ---------- | -- | -- |
| pageId | string |  |,| status | boolean |  |
| **Output** |    |    |



## setInnerHtml()

Help to set the html element on the provided selector


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br />value: string, <br /> } |  |
| **Output** |    |    |



## setInputValue()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## solveReptcha()

| Input      |    |    |
| ---------- | -- | -- |
| page | `Page` |  |
| **Output** |    |    |



## twitterLogin()

Method that help to login into twitter


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />email: string, <br />phoneNo: string, <br />password: string, <br /> } |  |
| **Output** |    |    |



## 📄 clickOnSpanTag (exported const)

## 📄 gmailLogin (exported const)

## 📄 isCaptchaExist (exported const)

## 📄 openPage (exported const)

## 📄 setBrowserPageIdle (exported const)

## 📄 setInnerHtml (exported const)

Help to set the html element on the provided selector


## 📄 setInputValue (exported const)

## 📄 solveReptcha (exported const)

## 📄 twitterLogin (exported const)

Method that help to login into twitter

# CLI

<details><summary>Show CLI information (3)</summary>
    
  # runBrowser()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 browserLunchOptions (exported const)

## 📄 runBrowser (exported const)

  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (43)</summary>
    
  # delay()

Handling the new page by checking all browser tabs and if exist then return the existing one for reuse
or create new one


| Input      |    |    |
| ---------- | -- | -- |
| ms | number |  |
| **Output** |    |    |



## foundOrNotXpath()

Utility function that always returns a boolean instead of throwing an error.
XPath version.


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br /> } |  |
| **Output** |    |    |



## foundOrNot()

Utility function that always returns a boolean instead of throwing an error.


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br />timeoutMilliseconds?: number, <br /> } |  |
| **Output** |    |    |



## getBrowserPageById()

| Input      |    |    |
| ---------- | -- | -- |
| browser | `Browser` |  |,| pageId | string |  |
| **Output** |    |    |



## getBrowserTabs()

| Input      |    |    |
| ---------- | -- | -- |
| browserInfo | `BrowserSession` |  |
| **Output** |    |    |



## getConnectedBrowsers()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getIdlePage()

| Input      |    |    |
| ---------- | -- | -- |
| browser | `Browser` |  |
| **Output** |    |    |



## getNewPage()

| Input      |    |    |
| ---------- | -- | -- |
| browser | `Browser` |  |
| **Output** |    |    |



## logConsoleIfDebug()

Utility function to log console only if a Debug flag is set.
If the flag is not set, doesn't print anything.


| Input      |    |    |
| ---------- | -- | -- |
| props | { message: string, <br />debug: boolean, <br /> } |  |
| **Output** |    |    |



## openMultiTabs()

| Input      |    |    |
| ---------- | -- | -- |
| props | `OpenMultiTabProps` |  |
| **Output** |    |    |



## openNewBrowserOnChildProcess()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## openNewBrowser()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## racePromises()

Typescript


| Input      |    |    |
| ---------- | -- | -- |
| promises | {  }[] |  |
| **Output** |    |    |



## retryClickAndWaitSelector()

Utility function that loops waiting a second and checking
if selector showed up. Fails if it takes more than 30 seconds.

this is good to use instead of page.waitForTimeout + page.waitForSelector


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: {  }, <br />selector: {  }, <br />selectorOptions?: {  }, <br />selectorToClick: string, <br />maxTime: number, <br /> } |  |
| **Output** |    |    |



## retryWaitSelector()

Utility function that loops waiting a second and checking
if selector showed up. Fails if it takes more than 30 seconds.

this is good to use instead of page.waitForTimeout + page.waitForSelector


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br />maxTime: number, <br /> } |  |
| **Output** |    |    |



## runBrowser()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## trueClick()

Utility function to call the element onclick event directly.
Success when clicking is improved over puppeteer page.click('selector')


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br /> } |  |
| **Output** |    |    |



## typeOnTheTargetWithXpathSelector()

Help to type in the input field using x-path


| Input      |    |    |
| ---------- | -- | -- |
| props | { page: `Page`, <br />selector: string, <br />text: string, <br /> } |  |
| **Output** |    |    |



## waitMilliseconds()

Utility functions to wait millisseconds. eg: 3000 waits 3 seconds


| Input      |    |    |
| ---------- | -- | -- |
| milliseconds | number |  |
| **Output** |    |    |



## 🔹 FacebookLoginPropsType

Properties: 

 | Name | Type | Description |
|---|---|---|
| email  | string |  |
| password  | string |  |
| page  | object |  |



## 🔹 GmailLoginPropsType

Properties: 

 | Name | Type | Description |
|---|---|---|
| email  | string |  |
| password  | string |  |
| page  | object |  |



## 🔹 NewPageProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| pageId (optional) | string |  |



## 🔹 OpenMultiTabProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| noOfTabs  | number |  |
| tabUrl  | string |  |
| browser  | object |  |



## 📄 browserLunchOptions (exported const)

## 📄 delay (exported const)

Handling the new page by checking all browser tabs and if exist then return the existing one for reuse
or create new one


## 📄 foundOrNotXpath (exported const)

Utility function that always returns a boolean instead of throwing an error.
XPath version.


## 📄 foundOrNot (exported const)

Utility function that always returns a boolean instead of throwing an error.


## 📄 getBrowserPageById (exported const)

## 📄 getBrowserTabs (exported const)

## 📄 getConnectedBrowsers (exported const)

## 📄 getIdlePage (exported const)

## 📄 getNewPage (exported const)

## 📄 logConsoleIfDebug (exported const)

Utility function to log console only if a Debug flag is set.
If the flag is not set, doesn't print anything.


## 📄 openMultiTabs (exported const)

## 📄 openNewBrowserOnChildProcess (exported const)

## 📄 openNewBrowser (exported const)

## 📄 racePromises (exported const)

## 📄 retryClickAndWaitSelector (exported const)

Utility function that loops waiting a second and checking
if selector showed up. Fails if it takes more than 30 seconds.

this is good to use instead of page.waitForTimeout + page.waitForSelector


## 📄 retryWaitSelector (exported const)

Utility function that loops waiting a second and checking
if selector showed up. Fails if it takes more than 30 seconds.

this is good to use instead of page.waitForTimeout + page.waitForSelector


## 📄 runBrowser (exported const)

## 📄 trueClick (exported const)

Utility function to call the element onclick event directly.
Success when clicking is improved over puppeteer page.click('selector')


## 📄 typeOnTheTargetWithXpathSelector (exported const)

Help to type in the input field using x-path


## 📄 waitMilliseconds (exported const)

Utility functions to wait millisseconds. eg: 3000 waits 3 seconds
  </details>

