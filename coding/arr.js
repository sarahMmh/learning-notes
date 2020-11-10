(function () {
  //const newArr = Object.create(Array.prototype);
  const arryMethods = ["push", "pop", "shift", "unshift"];
  arryMethods.forEach((item) => {
    switch (item) {
      case "push":
        Array.prototype.push = function (...args) {
          console.log("增加信息", ...args);
          // newArr.prototype.push.call(this,...args);
        };
      case "pop":
        Array.prototype.pop = function (args) {};
      default:
        break;
    }
  });
})();

const arr = [];
//arr.push(1)

const obj = { a: 1 };
Object.defineProperty(obj, "a", {
  get: function () {
    console.log("获取值");
  },
  set: function (newVal) {
    console.log("新的信息", newVal);
  },
  writable: "",
  value: "",
});
obj.a;
obj.a = 2;
