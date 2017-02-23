'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isTypeOf = function isTypeOf(type) {
  return function (o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === type;
  };
};
var isType = function isType(type) {
  return function (o) {
    return o === type;
  };
};
var isUndef = isTypeOf('undefined');
var isObject = isTypeOf('object');
var isNull = isType(null);

var get = function get() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return key.split('.').reduce(function (o, x) {
    return isUndef(o) || isNull(o) ? o : o[x];
  }, obj);
};

var has = function has(obj) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var currentObj = obj;
  return key.split('.').every(function (x) {
    if (!isObject(currentObj) || isNull(currentObj) || !(x in currentObj)) {
      return false;
    }
    currentObj = currentObj[x];
    return true;
  });
};

exports.get = get;
exports.has = has;