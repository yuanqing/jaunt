(function(exports) {

  'use strict';

  var isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var isString = function(obj) {
    return typeof obj === 'string';
  };

  var isInteger = function(obj) {
    var num = parseFloat(obj);
    return isFinite(obj) && !isNaN(num) && num % 1 === 0;
  };

  var trimKey = function(key) {
    return isString(key) ? key.trim() : key;
  };

  var parsePath = function(path) {
    return isArray(path) ? path : (isString(path) ? path.split('.') : [path]);
  };

  exports.set = function(obj, path, val) {

    path = parsePath(path);

    var i = -1;
    var len = path.length-1;
    var key;
    var o = obj;

    while (++i < len) {
      key = trimKey(path[i]);
      if (!(key in o)) {
        o[key] = isInteger(path[i+1]) ? [] : {};
      }
      o = o[key];
    }
    o[trimKey(path[len])] = val;
    return obj;

  };

  exports.get = function(obj, path) {

    path = parsePath(path);

    var i = -1;
    var len = path.length;
    var key;

    if (!len) {
      return undefined;
    }

    while (++i < len) {
      key = trimKey(path[i]);
      if ((typeof obj !== 'object' && !isArray(obj)) || !(key in obj)) {
        return undefined;
      }
      obj = obj[key];
    }
    return obj;

  };

})(typeof exports === 'undefined' ? this.jaunt : exports);
