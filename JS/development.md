# Starter Kit

Package Management
Bundling
Minification
Sourcemaps
Transpiling
Dynamic HTML Generation
Centralize HTTP
Mock API framework
Component libraries
Development Webserver
Linting
Automated Testing
Continuous Integration
Automated build
Automated deploy
Automated refactoring

--> Node Security Platform
    nsp check
    npm install -g nsp

## Web Server

> http-server
> express --> best choice
> live-server --> lightweight
> browsersync --> cross-device testing, integrates with express

### Express
```
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
```

npm install npm-run-all --save
"npm-run-all --parallel script1 script2 ..."

LocalTunnel -> creates a global url

## Transpilers

Typescript
- type safety,
- interfaces,
- type annotations
- enhanced autocompletion
- enhanced readability
- safer refactoring
- additional non-standard features
- some stuff non supported

Babel
- standardized js
- more fully a JS ecosystem
- no type defs
- test, lint, babel, great libs = safe


## Bundlers

### Module Format
ES6 Modules

``` import JQuery from 'jquery' ```

- standardized
- statically analyzable
- fails fast
- intelligent refactoring
- tree shaking (gets rid of unused code)
- easy to read
- named imports
- default exports

### Modern Bundlers

- Browserify
- Webpack
    - import CSS, images, etc like JS
    - hot-reloading web server
- Rollup
    - tree shaking
    - faster startup and loading
- JSPM


## Linters

ESLint - use preset
eslint-watch --> npm module

.eslintrc.json
```
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {

  }
}
```

