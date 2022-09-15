# React with native

react-with-native (ui-es5 operation)

HTML elements with React Native capabilities.



# Outline

## Docs

- [React with native](#react-with-native)

## Functions

- [A](#A)
- [ActivityIndicator](#ActivityIndicator)
- [Aside](#Aside)
- [Button](#Button)
- [Form](#Form)
- [getTailwindModules](#getTailwindModules)
- [H2](#H2)
- [I](#I)
- [Image](#Image)
- [Input](#Input)
- [joinClassNames](#joinClassNames)
- [Label](#Label)
- [Li](#Li)
- [Nav](#Nav)
- [Ol](#Ol)
- [P](#P)
- [Pressable](#Pressable)
- [PureAside](#PureAside)
- [PureDiv](#PureDiv)
- [PureNav](#PureNav)
- [Select](#Select)
- [Span](#Span)
- [Strong](#Strong)
- [Svg](#Svg)
- [TextArea](#TextArea)
- [Text](#Text)
- [Toggle](#Toggle)
- [TouchableOpacity](#TouchableOpacity)
- [trimClassName](#trimClassName)
- [Ul](#Ul)
- [wrapInTextIfNeeded](#wrapInTextIfNeeded)

## Interfaces:

- [SvgType](#SvgType)



# Docs

## React with native

### react-with-native

react-with-native exposes:

- the most popular html elements but wraps them to add the most suitable react-native counterpart.
- the most popular react-native components with their most suitable html counterpart
- some useful utility functions and components

`react-with-native` is integrated into [sensible stack](https://sensiblestack.com) by default, but you can install it into any project.


#### Installation

<details><summary>Tip for new projects!</summary>
Maybe it's better to use [Sensible](https://sensiblestack.com)! Sensible is a boilerplate that gets you up to speed quickly for full stack apps and it uses react-with-native out of the box! This will save you a lot of time.</details>

```bash
yarn add react-with-native
```


##### Tailwind

[Tailwind](https://tailwindcss.com) must be installed on both the web and on your react-native project.

- [react-native instructions](https://github.com/vadimdemedes/tailwind-rn)
- [react instructions](https://tailwindcss.com/docs/installation)

After installation, make sure you add all `react-with-native-*` to the content of your `tailwind.config.js` files, like this:

> `tailwind.config.js`

```js
const { getTailwindModules } = require("react-with-native");

const tailwindModules = getTailwindModules({
  //if you are using a sensible monorepo, put the packages with tailwind-based ui here
  packages: ["rwn-ui"],

  //if you are using any tailwind-based modules, put them here.
  modules: [
    "react-with-native",
    "react-with-native-alert",
    "react-with-native-form",
    "react-with-native-form-inputs",
    "react-with-native-modal",
    "react-with-native-notification",
    "react-with-native-router",
    "react-with-native-select",
    "react-with-native-store",
    "react-with-native-ui"
  ],
  //if you have a yarn workspace, put true here
  isWorkspace: false,
});

module.exports = {
  content: ["./src/**/*.{ts,tsx}", ...tailwindModules],
  ...your other config
};

```

In react project it's also possible to generate the css using the tailwind cli and import it into your code. With react-native this is not possible as far as I know.


##### For Next.js

Add the following to your webpack config in `next.config.js`:

```js
config.module.rules.push({
  test: /\.svg$/,
  use: ["@svgr/webpack"],
});
```

```bash
yarn add -D @svgr/webpack
```


##### Expo

To add the SVG Transformer, follow [these instructions](https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration).


#### API

##### HTML

- `<A>`
- `<Aside>`
- `<Button>`
- `<Div>`
- `<Form>`
- `<H2>`
- `<I>`
- `<Img>`
- `<Input>`
- `<Label>`
- `<Li>`
- `<Ol>`
- `<Ul>`
- `<Nav>`
- `<P>`
- `<Select>`
- `<Span>`
- `<Strong>`
- `<Svg>` (experimental)
- `<TextArea>`


##### react-native

- `<ActivityIndicator>`
- `<Pressable>`
- `<Text>`
- `<TouchableOpacity>`
- `<View>`


##### Components

- `<ScrollableDiv scroll={boolean}>`
- `<Toggle {...HTMLInputProps} native={...SwitchProps} onChange={(value: boolean) => void} />`


##### Utilities

- `trimClassName` removes classNames that aren't supported by react-native
- `joinClassNames` merges an array of className strings
- `wrapInTextIfNeeded` wraps a Text coponent around a string if you're react-native so the app can render.
- `getTailwindModules` provides the needed `node_modules` paths to include in your `tailwind.config.js`


#### Differences from react-native and react

- you need to apply your text-related classNames to the text itself directly or if your children are a string you can add textClassName as a prop.


# Functions

## A

## ActivityIndicator

## Aside

## Button

## Form

Form is just a html form on web. On react-native, it's a View




## getTailwindModules

### Parameters (1)

#### Parameter 1: options: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| packages (optional) | array | if you are using a sensible monorepo, put the packages with tailwind-based ui here |
| modules (optional) | array |  |
| isWorkspace (optional) | boolean | if this is a yarn workspace, put true here |



## H2

## I

## Image

## Input

## joinClassNames

### Parameters (1)

#### Parameter 1: args: array

- null: object






## Label

## Li

## Nav

## Ol

## P

## Pressable

button on web, pressable on react-native




## PureAside

## PureDiv

## PureNav

## Select

## Span

## Strong

## Svg

### Parameters (1)

## TextArea

## Text

## Toggle

## TouchableOpacity

button on web, pressable on react-native




## trimClassName

in react-native not all classNames are supported


### Returns: string

### Parameters (1)

#### Parameter 1: className: string

## Ul

## wrapInTextIfNeeded

NB: figure out a way to do the styles of the text right.




### Parameters (2)

#### Parameter 1: children: object

#### Parameter 2: textClassName (optional): string

# Interfaces

## SvgType

Properties: 

 | Name | Type | Description |
|---|---|---|
| src  | object |  |
| width (optional) | number |  |
| height (optional) | number |  |
| className (optional) | string |  |
| style (optional) | object |  |


