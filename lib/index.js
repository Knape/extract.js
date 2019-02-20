"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.has = exports.get = void 0;

const isTypeOf = type => o => typeof o === type; // eslint-disable-line 


const isType = type => o => o === type;

const isUndef = isTypeOf('undefined');
const isObject = isTypeOf('object');
const isNull = isType(null);
const isEmpty = isType('');
const regex = /\[|\]/gim;

const get = function get() {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (key === '') return null;
  return key.replace(regex, '.').split('.').reduce((o, x) => {
    return isUndef(o) || isNull(o) || isEmpty(x) ? o : o[x];
  }, obj) || defaultVal;
};

exports.get = get;

const has = function has(obj) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (key === '') return false;
  let currentObj = obj;
  return key.replace(regex, '.').split('.').every(x => {
    if (isEmpty(x)) return true;

    if (!isObject(currentObj) || isNull(currentObj) || !(x in currentObj)) {
      return false;
    }

    currentObj = currentObj[x];
    return true;
  });
};

exports.has = has;