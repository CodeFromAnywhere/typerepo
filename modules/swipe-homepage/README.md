# Swipe homepage

swipe-homepage (`OperationClassification` ui-cjs)



# Api reference

## `<SwipeHomepage />`

This homepage component assumes you provide it some CTA's (ideally 2 or 3) and some items.

- The items will be swipable
- The logo should be available in `public/logo.png`

![Example](../assets/SwipeHomepage.mov)


| Input      |    |    |
| ---------- | -- | -- |
| props | { ctas: { text: string, <br />href: string, <br /> }[], <br />items: `SwipeItem`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 SwipeHomepage (exported const)

This homepage component assumes you provide it some CTA's (ideally 2 or 3) and some items.

- The items will be swipable
- The logo should be available in `public/logo.png`

![Example](../assets/SwipeHomepage.mov)


## 🔹 SwipeItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| image  | string |  |
| description  | string |  |
| title  | string |  |
| href (optional) | string |  |


