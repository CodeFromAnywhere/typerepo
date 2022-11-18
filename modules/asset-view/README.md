# Asset view

asset-view (`OperationClassification` ui-cjs)


## 📁 AssetView

`AssetView` shows an asset. Every file-format has a different way to be rendered.




# Api reference

## `<InteractiveAsset />`

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 InteractiveAsset (exported const)

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

# Internal

<details><summary>Show internal (7)</summary>
    
  # `<AssetView />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { asset: `Asset`, <br />className?: string, <br />projectRelativeReferencingFilePath: string, <br />hideDownloadLink?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## itemGetBackendAssetUrl()

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.


| Input      |    |    |
| ---------- | -- | -- |
| config | { item: `AugmentedAnyModelType`, <br />backendAsset: `BackendAsset`, <br />isDownload?: boolean, <br /> } |  |
| **Output** | string   |    |



## `<ModelItemAssetView />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 AssetView (exported const)

## 📄 defaultClassName (exported const)

## 📄 itemGetBackendAssetUrl (exported const)

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.


## 📄 ModelItemAssetView (exported const)

  </details>

