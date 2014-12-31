'use strict';

var isInt = require('numero').isInt;
var check = require('cheque');

var trimKey = function(key) {
  return check.isString(key) ? key.trim() : key;
};

var parsePath = function(path) {
  return check.isString(path) ? path.split('.') : [].concat(path);
};

module.exports.set = function(obj, path, val) {

  // normalise `path` to an array
  path = parsePath(path);

  // traverse `obj` using `path` (up to the second-last key), updating `o` along the way
  var o = obj;
  var i = -1;
  var len = path.length-1; // second-last key
  while (++i < len) {
    var key = trimKey(path[i]);
    if (!(key in o)) {
      // current `key` does not exist; set it to either [] or {} by looking at `nextKey`
      var nextKey = trimKey(path[i+1]);
      o[key] = isInt(nextKey) ? [] : {};
    }
    o = o[key];
  }

  // `o` is the
  o[trimKey(path[len])] = val;

  // return the original `obj`
  return obj;

};

module.exports.get = function(obj, path) {

  // normalise `path` to an array
  path = parsePath(path);
  var len = path.length;

  // exit if empty `path`
  if (!len) {
    return undefined;
  }

  // traverse `obj` using `path`, updating `obj` along the way
  var i = -1;
  while (++i < len) {
    var key = trimKey(path[i]);
    // update `obj`
    if ((check.isObject(obj) || check.isArray(obj)) && key in obj) {
      obj = obj[key];
      continue;
    }
    // it must be that `path` is invalid; exit
    return undefined;
  }
  return obj;

};
