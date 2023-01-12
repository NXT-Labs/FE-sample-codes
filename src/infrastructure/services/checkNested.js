export const checkNested = (obj, prop, ...restProps) => {
  if (obj === undefined) {
    return false;
  }
  if (
    restProps.length === 0 &&
    Object.prototype.hasOwnProperty.call(obj, prop)
    &&
    obj[prop]
  ) {
    return true;
  }
  // return checkNested(obj[prop], ...restProps);
  return checkNested(obj[prop], ...restProps);

};