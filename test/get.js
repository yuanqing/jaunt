'use strict';

var test = require('tape');
var fn = require('..').get;

var arr = [ [ 'foo', 'bar' ] ];
var obj = {
  foo: {
    bar: [
      { baz: 'Hello' },
      { qux: 'World' }
    ]
  }
};

test('get the value for a valid `path` (integer or string)', function(t) {

  t.equal(fn(arr, 0), arr[0]);
  t.equal(fn(arr, '0'), arr[0]);
  t.equal(fn(arr, '0.1'), arr[0][1]);
  t.equal(fn(arr, ' 0 . 1 '), arr[0][1]);

  t.equal(fn(obj, 'foo'), obj.foo);
  t.equal(fn(obj, 'foo.bar'), obj.foo.bar);
  t.equal(fn(obj, 'foo.bar.0'), obj.foo.bar[0]);
  t.equal(fn(obj, ' foo . bar . 0 '), obj.foo.bar[0]);
  t.equal(fn(obj, 'foo.bar.1.qux'), obj.foo.bar[1].qux);

  t.end();

});

test('get the value for a valid `path` (integer or string)', function(t) {

  t.equal(fn(arr, [ 0 ]), arr[0]);
  t.equal(fn(arr, [ '0' ]), arr[0]);
  t.equal(fn(arr, [ 0, 1 ]), arr[0][1]);
  t.equal(fn(arr, [ '0', '1' ]), arr[0][1]);
  t.equal(fn(arr, [ ' 0 ', ' 1 ' ]), arr[0][1]);

  t.equal(fn(obj, [ 'foo' ]), obj.foo);
  t.equal(fn(obj, [ 'foo', 'bar' ]), obj.foo.bar);
  t.equal(fn(obj, [ 'foo', 'bar', '0' ]), obj.foo.bar[0]);
  t.equal(fn(obj, [ 'foo', 'bar', 0 ]), obj.foo.bar[0]);
  t.equal(fn(obj, [ ' foo ', ' bar ', ' 0 ' ]), obj.foo.bar[0]);
  t.equal(fn(obj, [ 'foo', 'bar', 1, 'qux' ]), obj.foo.bar[1].qux);
  t.equal(fn(obj, [ 'foo', 'bar', '1', 'qux' ]), obj.foo.bar[1].qux);

  t.end();

});

test('returns `undefined` if `path` is invalid', function(t) {

  t.equal(fn(arr, -1), undefined);
  t.equal(fn(arr, 2), undefined);

  t.equal(fn(obj, []), undefined);
  t.equal(fn(obj, ''), undefined);
  t.equal(fn(obj, 'invalid'), undefined);
  t.equal(fn(obj, 'foo.invalid'), undefined);
  t.equal(fn(obj, 'foo.bar.0.baz.invalid'), undefined);

  t.end();

});
