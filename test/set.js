'use strict';

var test = require('tape');
var fn = require('..').set;

test('returns the `obj`', function(t) {

  var obj = {};
  t.equal(fn(obj, 'foo', 'bar'), obj);
  t.looseEqual(fn(obj, 'foo', 'bar'), { foo: 'bar' });

  var arr = [];
  t.equal(fn(arr, 0, 'foo'), arr);
  t.looseEqual(arr, ['foo']);

  t.end();

});

test('sets the value at `path` (integer or string) to the specified `val`', function(t) {

  t.looseEqual(fn({}, 'foo', 'baz'), { foo: 'baz' });
  t.looseEqual(fn({ foo: 'bar' }, 'foo', 'baz'), { foo: 'baz' });
  t.looseEqual(fn({}, 'foo.bar', 'qux'), { foo: { bar: 'qux' } });
  t.looseEqual(fn({ foo: { bar: 'baz' } }, 'foo.bar', 'qux'), { foo: { bar: 'qux' } });

  t.looseEqual(fn([], 0, 'foo'), ['foo']);
  t.looseEqual(fn([], '1', 'foo'), [ , 'foo']);
  t.looseEqual(fn([], '0.1', 'foo'), [[ , 'foo']]);

  t.looseEqual(fn({}, 'foo.0', 'bar'), { foo: ['bar'] });
  t.looseEqual(fn([], '0.foo', 'bar'), [{ foo: 'bar' }]);

  t.looseEqual(fn({}, 'foo.0.bar', 'baz'), { foo: [ { bar: 'baz' } ] });
  t.looseEqual(fn({}, ' foo . 0 . bar ', 'baz'), { foo: [ { bar: 'baz' } ] });

  t.end();

});

test('sets the value at `path` (array) to the specified `val`', function(t) {

  t.looseEqual(fn({}, ['foo'], 'baz'), { foo: 'baz' });
  t.looseEqual(fn({ foo: 'bar' }, ['foo'], 'baz'), { foo: 'baz' });
  t.looseEqual(fn({}, ['foo', 'bar'], 'qux'), { foo: { bar: 'qux' } });
  t.looseEqual(fn({ foo: { bar: 'baz' } }, ['foo', 'bar'], 'qux'), { foo: { bar: 'qux' } });

  t.looseEqual(fn([], [0], 'foo'), ['foo']);
  t.looseEqual(fn([], ['1'], 'foo'), [ , 'foo']);
  t.looseEqual(fn([], [0, 1], 'foo'), [[ , 'foo']]);
  t.looseEqual(fn([], ['0', '1'], 'foo'), [[ , 'foo']]);

  t.looseEqual(fn({}, ['foo', 0], 'bar'), { foo: ['bar'] });
  t.looseEqual(fn([], [0, 'foo'], 'bar'), [{ foo: 'bar' }]);

  t.looseEqual(fn({}, ['foo', 0, 'bar'], 'baz'), { foo: [ { bar: 'baz' } ] });
  t.looseEqual(fn({}, [' foo ', ' 0 ', ' bar '], 'baz'), { foo: [ { bar: 'baz' } ] });

  t.end();

});
