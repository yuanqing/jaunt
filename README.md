# Jaunt.js [![npm Version](http://img.shields.io/npm/v/jaunt.svg?style=flat)](https://www.npmjs.org/package/jaunt) [![Build Status](https://img.shields.io/travis/yuanqing/jaunt.svg?style=flat)](https://travis-ci.org/yuanqing/jaunt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/jaunt.svg?style=flat)](https://coveralls.io/r/yuanqing/jaunt)

> Access the value in an object or array using to a dot-delimited string.

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
- `path` is a dot-delimited `string` of keys, or an `array` of keys.

## Installation

Install via [npm](https://www.npmjs.org/package/jaunt):

```bash
$ npm i --save jaunt
```

## License

[MIT license](https://github.com/yuanqing/jaunt/blob/master/LICENSE)
