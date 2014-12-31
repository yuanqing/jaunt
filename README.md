# Jaunt.js [![npm Version](http://img.shields.io/npm/v/jaunt.svg?style=flat)](https://www.npmjs.org/package/jaunt) [![Build Status](https://img.shields.io/travis/yuanqing/jaunt.svg?style=flat)](https://travis-ci.org/yuanqing/jaunt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/jaunt.svg?style=flat)](https://coveralls.io/r/yuanqing/jaunt)

> Get and set a value in an object/array using a dot-delimited string or array of keys.

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

jaunt.set(obj, 'foo.bar.0', 'Better');
/* =>
 * {
 *   foo: {
 *     bar: ['Better', 'World']
 *   }
 * }
 */

jaunt.set(obj, 'baz', 'New');
/* =>
 * {
 *   foo: {
 *     bar: ['Better', 'World']
 *   },
 *   baz: 'New'
 * }
 */
```

Note the syntax for referencing array elements; it is `foo.bar.0` rather than `foo.bar[0]`.

## API

### jaunt.get(obj, path)

Returns the value in `obj` corresponding to `path`. Returns `undefined` if `path` does not exist.

- `obj` &mdash; An object or array.
- `path` &mdash; A dot-delimited string of keys, or an array of keys.

### jaunt.set(obj, path, val)

Sets the element corresponding to `path` in the `obj` to the specified `val`. Any &ldquo;intermediate&rdquo; elements in the path will be created if they do not exist. Returns the modified `obj`.

- `obj` &mdash; An object or array.
- `path` &mdash; A dot-delimited string of keys, or an array of keys.
- `val` &mdash; The value to set the `path` to.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save jaunt
```

Install via [bower](http://bower.io/):

```bash
$ bower i --save yuanqing/jaunt
```

To use Jaunt in the browser, include [the minified script](https://github.com/yuanqing/jaunt/blob/master/dist/jaunt.min.js) in your HTML:

```html
<body>
  <!-- ... -->
  <script src="path/to/dist/jaunt.min.js"></script>
  <script>
    // jaunt available here
  </script>
</body>
```

## Changelog

- 1.2.0
  - Migrate tests to [tape](https://github.com/substack/tape)
- 1.1.3
  - Expose module for use in the browser
  - Add minified version of the module
  - Add bower.json
- 1.0.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/jaunt/blob/master/LICENSE)
