# new `ui-web` operation

Welcome to this new website boilerplate

To finish setup, you need to do the following:

- set the right port in `package.json` to your scripts, and add that to the `port-conventions`
- set the stop script correctly according to the name of your app
- Set a description in `OPERATION.md`
- Alter `public/manifest.json` and all assets in `/public` so you get a nice PWA
- Put the custom routes in `pagse/[...paths].tsx` and `pages/index.tsx`. We need to resolve it like this because of our default routes and because of react-native compatibility.
