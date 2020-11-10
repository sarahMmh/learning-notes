/**
 * function Fn(){}
 * obj = new Fn()
 * 要想实现new的话，先看看new都做了哪些事情
 * 1、创建一个空对象obj={}
 * 2、将obj.__proto__指向了Fn.prototype
 * 3、改变了Fn中的this，this指向了obj
 * 4、如果Fn有返回不是引用类型的值，那么obj就是返回的对象，否则就是obj自己
 */
const myNew = (construcor, ...args) => {
  let obj = {};
  obj.__proto__ = construcor.prototype;
  let result = construcor.apply(obj, args);
  return (result !== null && typeof result === "object") ||
    typeof result === "function"
    ? result
    : obj;
};
function Test(name, age) {
  this.name = name;
  this.age = age;
  return null;
}
Test.prototype.say = function () {
  console.log(`我的名字是${this.name}，我今年${this.age}岁了`);
};
var test = myNew(Test, "Tom", "18");
test.say();
console.log(test);
console.log(test instanceof Test);

var test2 = new Test("Tom", "18");
test2.say();
console.log(test2);
console.log(test2 instanceof Test);
