(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.jaunt = factory();
  }
})(this, function() {

  'use strict';

  return function(obj, path) {
    var i, len, key;
    if (Object.prototype.toString.call(path) !== '[object Array]') {
      path = path.split('.');
    }
    if (!path.length) {
      return undefined;
    }
    for (i = 0, len = path.length; i < len; ++i) {
      key = typeof path[i] === 'string' ? path[i].trim() : path[i];
      if (obj[key]) {
        obj = obj[key];
      } else {
        return undefined;
      }
    }
    return obj;
  };

});