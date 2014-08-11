/* globals describe, it, expect */
'use strict';

var jaunt = require('..');

describe('jaunt', function() {

  var obj = {
    foo: {
      bar: [
        { baz: 'Hello' },
        { qux: 'World' }
      ]
    }
  };

  it('returns a value in `obj` if `path` is a string', function() {
    expect(jaunt(obj, 'foo')).toBe(obj.foo);
    expect(jaunt(obj, 'foo.bar')).toBe(obj.foo.bar);
    expect(jaunt(obj, 'foo.bar.0')).toBe(obj.foo.bar[0]);
    expect(jaunt(obj, ' foo . bar . 0 ')).toBe(obj.foo.bar[0]); // whitespace is trimmed
    expect(jaunt(obj, 'foo.bar.1.qux')).toBe(obj.foo.bar[1].qux);
  });

  it('returns undefined if the `path` string is invalid', function() {
    expect(jaunt(obj, '')).toBe(undefined);
    expect(jaunt(obj, 'invalid')).toBe(undefined);
    expect(jaunt(obj, 'foo.invalid')).toBe(undefined);
    expect(jaunt(obj, 'foo.bar.0.baz.invalid')).toBe(undefined);
  });

  it('returns a value in `obj` if `path` is an array', function() {
    expect(jaunt(obj, ['foo'])).toBe(obj.foo);
    expect(jaunt(obj, ['foo', 'bar'])).toBe(obj.foo.bar);
    expect(jaunt(obj, ['foo', 'bar', 0])).toBe(obj.foo.bar[0]);
    expect(jaunt(obj, [' foo ', ' bar ', 0])).toBe(obj.foo.bar[0]); // whitespace is trimmed
    expect(jaunt(obj, ['foo', 'bar', 1, 'qux'])).toBe(obj.foo.bar[1].qux);
  });

  it('returns undefined if the `path` array is invalid', function() {
    expect(jaunt(obj, [])).toBe(undefined);
    expect(jaunt(obj, [''])).toBe(undefined);
    expect(jaunt(obj, ['invalid'])).toBe(undefined);
    expect(jaunt(obj, ['foo', 'invalid'])).toBe(undefined);
    expect(jaunt(obj, ['foo', 'bar', 0, 'baz', 'invalid'])).toBe(undefined);
  });

});