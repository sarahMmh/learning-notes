/**
 * Object.create是穿件一个新对象，使用现有的对象来提供新对象的__proto__.
 * @param {*} proto 以
 */
const myCreate = (proto) => {
  function fn() {}
  if (typeof proto != "object") {
    throw new TypeError("Object prototype 必须是对象或者null");
  }
  fn.prototype = proto;
  return new fn();
};
