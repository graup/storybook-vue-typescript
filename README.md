# storybook-vue-typescript

## @storybook/vue: remove dependecy on `babel-preset-vue`.

You'll need to edit `node_modules/@storybook/vue/dist/server/framework-preset-vue.js:34:42` to make it just

```js
function babelDefault(config) {
  return config;
}
```


## Project setup
```
yarn
```
### Storybook
```
yarn run storybook
```
