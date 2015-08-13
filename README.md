# wrapSync

![Last version](https://img.shields.io/github/tag/Kikobeats/wrapsync.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/wrapsync/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/wrapsync)
[![Dependency status](http://img.shields.io/david/Kikobeats/wrapsync.svg?style=flat-square)](https://david-dm.org/Kikobeats/wrapsync)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/wrapsync.svg?style=flat-square)](https://david-dm.org/Kikobeats/wrapsync#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/wrapsync.svg?style=flat-square)](https://www.npmjs.org/package/wrapsync)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> Take a sync function and make it async, passing its return value to a callback. Based on [async#asyncify](https://github.com/caolan/async#asyncifyfunc) as module.

## Install

```bash
npm install wrapsync --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install wrapsync --save
```

and later link in your HTML:

```html
<script src="bower_components/wrapsync/dist/wrapsync.js"></script>
```

## Usage

```js
var wrapSync = require('wrapsync');

var parse = wrapSync(JSON.parse);

parse('{\"foo\":bar}', function(err, result) {
  // data is the result of parsing the text.
  // If there was a parsing error, it would have been caught.
});
```

## API

### wrapSync(fn)

Take a sync function and make it async, passing its return value to a callback. This is useful for plugging sync functions into a waterfall, series, or other async functions. Any arguments passed to the generated function will be passed to the wrapped function (except for the final callback argument). Errors thrown will be passed to the callback

__Arguments__

* `fn` - a sync function.

## License

MIT © [Kiko Beats](http://kikobeats.com)