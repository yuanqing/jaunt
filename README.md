# Jaunt.js [![npm Version](http://img.shields.io/npm/v/jaunt.svg?style=flat)](https://www.npmjs.org/package/jaunt) [![Build Status](https://img.shields.io/travis/yuanqing/jaunt.svg?style=flat)](https://travis-ci.org/yuanqing/jaunt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/jaunt.svg?style=flat)](https://coveralls.io/r/yuanqing/jaunt)

> Get or set a value in an object or array using a dot-delimited string.

## Usage

Get:

```js
var obj = {
  foo: {
    bar: ['Hello', 'World']
  }
};

jaunt.get(obj, 'foo.bar.0');       //=> 'Hello'
jaunt.get(obj, ['foo', 'bar', 1]); //=> 'World'

jaunt.get(obj, 'invalid'); //=> undefined
```

Set:

```js
var obj = {
  foo: {
    bar: ['Hello', 'World']
  }
};

jaunt.set(obj, 'foo.bar.0', 'Goodbye');
/* =>
 * {
 *   foo: {
 *     bar: ['Goodbye', 'World']
 *   }
 * }
 */
```

Go!

## API

### jaunt.get(obj, path)

Returns the value in `obj` corresponding to `path`. Returns `undefined` if `path` does not exist.

- `obj` is an `object` or an `array`.
- `path` is a dot-delimited `string` of keys, or an `array` of keys.

### jaunt.set(obj, path, val)

Sets the element corresponding to `path` in `obj` to the specified `val`. Returns the `obj`.

- `obj` is an `object` or an `array`.
- `path` is a dot-delimited `string` of keys, or an `array` of keys.

## Installation

Install via [npm](https://www.npmjs.org/package/jaunt):

```bash
$ npm i --save jaunt
```

## License

[MIT license](https://github.com/yuanqing/jaunt/blob/master/LICENSE)
