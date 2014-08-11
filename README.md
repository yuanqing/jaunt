# Jaunt.js [![Build Status](https://img.shields.io/travis/yuanqing/jaunt.svg?style=flat)](https://travis-ci.org/yuanqing/jaunt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/jaunt.svg?style=flat)](https://coveralls.io/r/yuanqing/jaunt)

> Access a value in an object or array using a dot-delimited string.

## Usage

```js
var obj = {
  foo: {
    bar: ['Hello', 'World']
  }
};

jaunt(obj, 'foo.bar.0'); //=> "Hello"
jaunt(obj, ['foo', 'bar', 1]); //=> "World"

jaunt(obj, 'invalid'); //=> undefined
```

## API

### jaunt(obj, path)

Returns the value in `obj` corresponding to `path`. Returns `undefined` if `path` does not exist.

- `obj` is an `object` or an `array`.
- `path` is a dot-delimited `string` or an `array` of keys.

## Installation

Install via [npm](https://www.npmjs.org/package/jaunt):

```bash
$ npm i --save jaunt
```

Or [grab the minified script](https://github.com/yuanqing/jaunt/raw/master/dist/jaunt.min.js) from the [`dist`](https://github.com/yuanqing/jaunt/tree/master/dist) directory.

## License

[MIT license](https://github.com/yuanqing/jaunt/blob/master/LICENSE)