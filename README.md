# babel-plugin-react-i18next 
[![NPM Status](https://img.shields.io/npm/v/babel-plugin-react-i18next.svg)](https://www.npmjs.com/package/babel-plugin-react-i18next)   

A babel plugin to help you to invoke some i18n-related translation functions globally.

### [DEMO](https://github.com/zixiCat/babel-plugin-react-i18next)

## Installation

- YARN

```bash
   yarn add babel-plugin-react-i18next --dev
```

- NPM

```bash
   npm i babel-plugin-react-i18next --save-dev
```

## Usage

First of all, make sure `react-i18next` and `i18next` are both installed, if not, install them.

Then Add `babel-plugin-react-i18next` to the plugins section of your babel configuration file such as `.babelrc`.
Once done, When you initialize i18n, you don't have to invoke i18n-related functions in JSX/TSX files.

```json
{
  "plugins": ["babel-plugin-react-i18next"]
}
```

You can also use additional options to control which snippet type to be compiled.

All default values are true.

More options are in preparation

```json
{
  "plugins": [
    [
      "babel-plugin-react-i18next",
      {
        "JSXText": false
      }
    ]
  ]
}
```

The following are the supported conversion types.

JSXText
```diff  
-   <div> What a save! </div>
+   <div> {t('What a save!')} </div>
```

JXSExpressionContainer
```diff  
-   {'What a save!'}
+   {t('What a save!')}
```

JSXElement (only 2 levels of relationship)
```diff  
-   <div> hello <h3> zixiCat </h3> </div>
+   <div> <Trans> hello <h3> zixiCat </h3> </Trans> </div>
```

JSXAttribute (it will not change the className attribute)
```diff  
-   <div attr='What a save!'></div>
+   <div attr={t('What a save!')}></div>
```

## Bug tracker

If you find a bug, please report it [here on Github](https://github.com/zixiCat/babel-plugin-react-i18next/issues)!
