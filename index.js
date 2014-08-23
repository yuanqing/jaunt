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

  return isString(key) ? key.trim() : key; // only trim if `key` is a string

};

var jaunt = {};

jaunt.set = function(obj, path, val) {

  var o, key;
  var i, len;

  if (!isArray(path)) {
    path = isString(path) ? path.split('.') : [path];
  }

  o = obj;
  for (i = 0, len = path.length-1; i < len; ++i) {
    key = trimKey(path[i]);
    if (!(key in o)) {
      o[key] = isInteger(path[i+1]) ? [] : {};
    }
    o = o[key];
  }
  o[trimKey(path[path.length-1])] = val;
  return obj;

};

jaunt.get = function(obj, path) {

  var key;
  var i, len;

  if (!isArray(path)) {
    path = isString(path) ? path.split('.') : [path];
  }
  if (!path.length) {
    return undefined;
  }

  for (i = 0, len = path.length; i < len; ++i) {
    key = trimKey(path[i]);
    if (obj === null || (typeof obj !== 'object' && !isArray(obj)) || !(key in obj)) {
      return undefined;
    }
    obj = obj[key];
  }
  return obj;

};

module.exports = exports = jaunt;
