'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isTypeOf = function isTypeOf(type) {
  return function (o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === type;
  };
}; // eslint-disable-line 
var isType = function isType(type) {
  return function (o) {
    return o === type;
  };
};
var isUndef = isTypeOf('undefined');
var isObject = isTypeOf('object');
var isNull = isType(null);
var isEmpty = isType('');
var regex = /\[|\]/gim;

var get = function get() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (key === '') return null;
  return key.replace(regex, '.').split('.').reduce(function (o, x) {
    return isUndef(o) || isNull(o) || isEmpty(x) ? o : o[x];
  }, obj) || defaultVal;
};

var has = function has(obj) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (key === '') return false;
  var currentObj = obj;
  return key.replace(regex, '.').split('.').every(function (x) {
    if (isEmpty(x)) return true;
    if (!isObject(currentObj) || isNull(currentObj) || !(x in currentObj)) {
      return false;
    }
    currentObj = currentObj[x];
    return true;
  });
};

exports.get = get;
exports.has = has;