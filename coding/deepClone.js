const obj = {
  name: "zhangsan",
  params: {
    results: [
      {
        describe: "yw",
        score: "90",
      },
      {
        describe: "sx",
        score: "98",
      },
    ],
  },
  getName: function () {
    return this.name;
  },
};
// 方法一：
const depObj1 = JSON.parse(JSON.stringify(obj));
console.log(depObj1 == obj);
console.log(depObj1);
// 局限性
// 无法实现对函数、正则等特殊对象的克隆
// 会抛弃对象的constructor，所有的构造函数会指向Object
// 对象有循环引用，会报错

/* 方法二 */
const deepClone = (object) => {
  if (typeof object == null || typeof object != "object") {
    return object;
  }
  const obj = Array.isArray(object) ? [] : {};
  for (let key in object) {
    obj[key] = deepClone(object[key]);
  }

  return obj;
};
const depObj2 = deepClone(obj);
console.log(depObj2);
console.log(depObj2.params == obj.params);
