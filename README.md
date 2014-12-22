# Jaunt.js [![npm Version](http://img.shields.io/npm/v/jaunt.svg?style=flat)](https://www.npmjs.org/package/jaunt) [![Build Status](https://img.shields.io/travis/yuanqing/jaunt.svg?style=flat)](https://travis-ci.org/yuanqing/jaunt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/jaunt.svg?style=flat)](https://coveralls.io/r/yuanqing/jaunt)

> Get/set a value in an Object/Array using a dot-delimited String or Array of keys.

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

jaunt.set(obj, 'foo.bar.0', 'Modified');
/* =>
 * {
 *   foo: {
 *     bar: ['Modified', 'World']
 *   }
 * }
 */

jaunt.set(obj, 'baz', 'New');
/* =>
 * {
 *   foo: {
 *     bar: ['Modified', 'World']
 *   },
 *   baz: 'New'
 * }
 */
```

Note the syntax for referencing Array elements; it is `foo.bar.0` rather than `foo.bar[0]`.

## API

### jaunt.get(obj, path)

Returns the value in `obj` corresponding to `path`. Returns `undefined` if `path` does not exist.

- `obj` &mdash; An Object or Array.
- `path` &mdash; A dot-delimited String of keys, or an Array of keys.

### jaunt.set(obj, path, val)

Sets the element corresponding to `path` in the `obj` to the specified `val`. &ldquo;Any intermediate&rdquo; elements in the path will be created if they do not exist. Returns the modified `obj`.

- `obj` &mdash; An Object or Array.
- `path` &mdash; A dot-delimited String of keys, or an Array of keys.
- `val` &mdash; The value to set `path` to.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save jaunt
```

Install via [bower](http://bower.io/):

```bash
$ bower i --save yuanqing/jaunt
```

To use Jaunt in the browser, include [the minified script](https://github.com/yuanqing/jaunt/blob/master/jaunt.min.js) in your HTML:

```html
<body>
  <!-- ... -->
  <script src="path/to/jaunt.min.js"></script>
  <script>
    // jaunt available here
  </script>
</body>
```

## Changelog

- 1.1.3
  - Expose module for use in the browser
  - Add minified version of the module
  - Add bower.json
- 1.0.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/jaunt/blob/master/LICENSE)
