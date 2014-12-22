/* globals describe, it, expect */
'use strict';

var jaunt = require('..');

describe('jaunt.get(obj, path)', function() {

  var arr = [ [ 'foo', 'bar' ] ];

  var obj = {
    foo: {
      bar: [
        { baz: 'Hello' },
        { qux: 'World' }
      ]
    }
  };

  it('gets a value in `obj` if `path` is a String or Integer', function() {

    expect(jaunt.get(arr, 0)).toBe(arr[0]);
    expect(jaunt.get(arr, '0')).toBe(arr[0]);
    expect(jaunt.get(arr, '0.1')).toBe(arr[0][1]);
    expect(jaunt.get(arr, ' 0 . 1 ')).toBe(arr[0][1]);

    expect(jaunt.get(obj, 'foo')).toBe(obj.foo);
    expect(jaunt.get(obj, 'foo.bar')).toBe(obj.foo.bar);
    expect(jaunt.get(obj, 'foo.bar.0')).toBe(obj.foo.bar[0]);
    expect(jaunt.get(obj, ' foo . bar . 0 ')).toBe(obj.foo.bar[0]);
    expect(jaunt.get(obj, 'foo.bar.1.qux')).toBe(obj.foo.bar[1].qux);

  });

  it('gets a value in `obj` if `path` is an Array', function() {

    expect(jaunt.get(arr, [ 0 ])).toBe(arr[0]);
    expect(jaunt.get(arr, [ '0' ])).toBe(arr[0]);
    expect(jaunt.get(arr, [ 0, 1 ])).toBe(arr[0][1]);
    expect(jaunt.get(arr, [ '0', '1' ])).toBe(arr[0][1]);
    expect(jaunt.get(arr, [ ' 0 ', ' 1 ' ])).toBe(arr[0][1]);

    expect(jaunt.get(obj, [ 'foo' ])).toBe(obj.foo);
    expect(jaunt.get(obj, [ 'foo', 'bar' ])).toBe(obj.foo.bar);
    expect(jaunt.get(obj, [ 'foo', 'bar', '0' ])).toBe(obj.foo.bar[0]);
    expect(jaunt.get(obj, [ 'foo', 'bar', 0 ])).toBe(obj.foo.bar[0]);
    expect(jaunt.get(obj, [ ' foo ', ' bar ', ' 0 ' ])).toBe(obj.foo.bar[0]);
    expect(jaunt.get(obj, [ 'foo', 'bar', 1, 'qux' ])).toBe(obj.foo.bar[1].qux);
    expect(jaunt.get(obj, [ 'foo', 'bar', '1', 'qux' ])).toBe(obj.foo.bar[1].qux);

  });

  it('returns undefined if the `path` is invalid', function() {

    expect(jaunt.get(arr, -1)).toBeUndefined();
    expect(jaunt.get(arr, 2)).toBeUndefined();

    expect(jaunt.get(obj, [])).toBeUndefined();
    expect(jaunt.get(obj, '')).toBeUndefined();
    expect(jaunt.get(obj, 'invalid')).toBeUndefined();
    expect(jaunt.get(obj, 'foo.invalid')).toBeUndefined();
    expect(jaunt.get(obj, 'foo.bar.0.baz.invalid')).toBeUndefined();

  });

});

describe('jaunt.set(obj, path, val)', function() {

  it('returns `obj`', function() {

    var obj = {};
    expect(jaunt.set(obj, 'foo', 'bar')).toBe(obj);
    expect(obj).toEqual({ foo: 'bar' });

    var arr = [];
    expect(jaunt.set(arr, 0, 'bar')).toBe(arr);
    expect(arr).toEqual(['bar']);

  });

  it('sets the `path` in `obj` to the specified `val` if path is a String or Integer', function() {

    expect(jaunt.set({}, 'foo', 'baz')).toEqual({ foo: 'baz' });
    expect(jaunt.set({ foo: 'bar' }, 'foo', 'baz')).toEqual({ foo: 'baz' });
    expect(jaunt.set({}, 'foo.bar', 'qux')).toEqual({ foo: { bar: 'qux' } });
    expect(jaunt.set({ foo: { bar: 'baz' } }, 'foo.bar', 'qux')).toEqual({ foo: { bar: 'qux' } });

    expect(jaunt.set([], 0, 'foo')).toEqual(['foo']);
    expect(jaunt.set([], '1', 'foo')).toEqual([undefined, 'foo']);
    expect(jaunt.set([], '0.1', 'foo')).toEqual([[undefined, 'foo']]);

    expect(jaunt.set({}, 'foo.0', 'bar')).toEqual({ foo: ['bar'] });
    expect(jaunt.set([], '0.foo', 'bar')).toEqual([{ foo: 'bar' }]);

    expect(jaunt.set({}, 'foo.0.bar', 'baz')).toEqual({ foo: [ { bar: 'baz' } ] });
    expect(jaunt.set({}, ' foo . 0 . bar ', 'baz')).toEqual({ foo: [ { bar: 'baz' } ] });

  });

  it('sets the `path` in `obj` to the specified `val` if `path` is an Array', function() {

    expect(jaunt.set({}, ['foo'], 'baz')).toEqual({ foo: 'baz' });
    expect(jaunt.set({ foo: 'bar' }, ['foo'], 'baz')).toEqual({ foo: 'baz' });
    expect(jaunt.set({}, ['foo', 'bar'], 'qux')).toEqual({ foo: { bar: 'qux' } });
    expect(jaunt.set({ foo: { bar: 'baz' } }, ['foo', 'bar'], 'qux')).toEqual({ foo: { bar: 'qux' } });

    expect(jaunt.set([], [0], 'foo')).toEqual(['foo']);
    expect(jaunt.set([], ['1'], 'foo')).toEqual([undefined, 'foo']);
    expect(jaunt.set([], [0, 1], 'foo')).toEqual([[undefined, 'foo']]);
    expect(jaunt.set([], ['0', '1'], 'foo')).toEqual([[undefined, 'foo']]);

    expect(jaunt.set({}, ['foo', 0], 'bar')).toEqual({ foo: ['bar'] });
    expect(jaunt.set([], [0, 'foo'], 'bar')).toEqual([{ foo: 'bar' }]);

    expect(jaunt.set({}, ['foo', 0, 'bar'], 'baz')).toEqual({ foo: [ { bar: 'baz' } ] });
    expect(jaunt.set({}, [' foo ', ' 0 ', ' bar '], 'baz')).toEqual({ foo: [ { bar: 'baz' } ] });

  });

});
