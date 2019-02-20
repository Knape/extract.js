const isTypeOf = type => o => (typeof o === type); // eslint-disable-line 
const isType = type => o => (o === type);
const isUndef = isTypeOf('undefined');
const isObject = isTypeOf('object');
const isNull = isType(null);
const isEmpty = isType('');
const regex = /\[|\]/gim;

const get = (obj = {}, key = '', defaultVal = null) => {
  if (key === '') return null;
  return key.replace(regex, '.').split('.').reduce((o, x) => {
    return isUndef(o) || isNull(o) || isEmpty(x)
      ? o
      : o[x];
  }, obj) || defaultVal;
};

const has = (obj, key = '') => {
  if (key === '') return false;
  let currentObj = obj;
  return key.replace(regex, '.').split('.').every((x) => {
    if (isEmpty(x)) return true;
    if (!isObject(currentObj) || isNull(currentObj) || !(x in currentObj)) {
      return false;
    }
    currentObj = currentObj[x];
    return true;
  });
};

export { get, has };
