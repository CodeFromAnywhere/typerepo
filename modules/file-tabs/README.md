# File tabs

file-tabs (`OperationClassification` ui-cjs)


## 📁 file-tabs

Open files as tabs so you can come back there...




# Api reference

## 📄 fileTabsInitialValues (exported const)

## `<FileTabs />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 FileTabs (exported const)

# Internal

<details><summary>Show internal (8)</summary>
    
  # getActivePage()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getOpenPageUrl()

gets the url of the open page

- paths is a special query key that is expanded as path, not as query
- index page should be on /


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## renderIcon()

<Svg src={svgSrc} className="w-4 h-4 text-gray-900 dark:text-gray-200" />


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 🔹 FileTabsStoreType

Properties: 

 | Name | Type | Description |
|---|---|---|
| unsavedFiles  | object |  |
| openPages  | array |  |



## 📄 getActivePage (exported const)

## 📄 getOpenPageUrl (exported const)

gets the url of the open page

- paths is a special query key that is expanded as path, not as query
- index page should be on /


## 📄 renderIcon (exported const)

## 📄 useStore (exported const)

NB: this is a `useStore` without a `StoreProvider`, because I think I won't ever need the provider since I won't ever need this as the sole storage in any component/app. If I do, I should make a provider, but it's usually better to create the `useStore` and `StoreProvider` in the component itself because it often comprises more than just this one.
  </details>

