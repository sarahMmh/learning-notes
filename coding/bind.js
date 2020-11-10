const obj = {
  name: "zhangsan",
  getName: function () {
    console.log(this.name);
    return this.name;
  },
};
const obj2 = {
  name: "obj2",
};

const myBind = function (objThis, ...args) {
  if (typeof this != "function") {
    throw new TypeError("只有函数才能调用myBind");
  }
  const _this = this;
  bound = function (...params) {
    const isNew = this instanceof bound; //this 是否bound的实例，是否是new bound的结果
    const context = isNew ? this : Object(objThis); //new 调用就绑定大this，否则就绑定大objThis，使用Object是为了方式objThis是一个基本类型值
    return _this.apply(context, [...args, ...params]);
  };
  if (this.prototype) {
    //   为了继承当前函数的原型上的方法
    bound.prototype = Object.create(this.prototype);
  }
  return bound;
};
Function.prototype.myBind = myBind;
/*obj.getName(); //zhangsan
// getName(); ///getName is not defined
let getname = obj.getName.myBind(obj2);
getname(); //undefined
let obj3 = new getname(); */
function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};

const Cat = Animal.myBind(null, "cat");
const cat = new Cat("white");

if (
  cat.say() === "I'm a white cat" &&
  cat instanceof Cat &&
  cat instanceof Animal
) {
  console.log("success");
}
