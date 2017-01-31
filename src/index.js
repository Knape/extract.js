const isTypeOf = type => o => (typeof o === type);
const isType = type => o => (o === type);
const isUndef = isTypeOf('undefined');
const isObject = isTypeOf('object');
const isNull = isType(null);

const get = (obj = {}, key = '', defaultVal = null) => {
  return key.split('.').reduce((o, x) => (
    isUndef(o) || isNull(o)
      ? o
      : o[x]
  ), obj) || defaultVal;
};

const has = (obj, key = '') => {
  let currentObj = obj;
  return key.split('.').every((x) => {
    if (!isObject(currentObj) || isNull(currentObj) || !(x in currentObj)) {
      return false;
    }
    currentObj = currentObj[x];
    return true;
  });
};

export { get, has };
export default { get, has };
