<div align="center">
  <img width="200" heigth="200" src="src/assets/logo.png" alt="Vue-logo">
</div>


# VVBanner Sample project

[![npm version](https://badge.fury.io/js/%40supergose%2Fvv-banner.svg)](https://badge.fury.io/js/%40supergose%2Fvv-banner)

A sample project to demonstrate how to bundle a vuejs stand-alone component.

## HOW-TO create a standalone Vue Component

With vue-cli >= 3.0 you have create a new vuejs project:
```
    vue create <my-component>
```

Add in folder "./components/" a new file index.js
```javascript
    import Vue from 'vue'
    import VVBanner from './VVBanner.vue'

    const Components = {
        VVBanner
    }

    Object.keys(Components).forEach( name => {
        Vue.component(name, Components[name])
    })
```

Modify the package.json by adding a 'license', a 'main' and a new script named 'bundle':
```json
  "name": "@supergose/vv-banner",
  "license": "MIT",
  "main": "./dist/vv-banner.common.js",
  "scripts": {
    "bundle": "vue-cli-service build --target lib --name vv-banner ./src/components/index.js",
  },
```

In order to build the bundle launch the new script:
```
npm run bundle
```

## HOW-TO use the component
In your application include the component in main.js
```javascript
    import '@supergose/vv-banner'
    import '@supergose/vv-banner/dist/vv-banner.css'
```
and use the component in your template

```html
    <VVBanner msg="Banner text"/>
```