/**
 * myInstanceOf
 * 实例L是否属于某种类型R
 * @param {*} L
 * @param {*} R
 */
const myInstanceOf = (L, R) => {
  let O = R.prototype; //R的原型
  let proto = L.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto == O) return true;
    proto = proto.__proto__;
  }
};
