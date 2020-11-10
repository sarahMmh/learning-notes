const queryParams = (url) => {
  //url='?a=0&a=1&c=0&url=url内容';
  //
  const lastIndex = url.lastIndexOf("?");
  const params = url.slice(lastIndex + 1);
  // a=0&a=1&c=0
  const arr = params.split("&");
  //[a=0] [a=1] [c=0]
  const obj = {};
  arr.forEach((item) => {
    const itemArr = item.split("=");
    const key = itemArr[0];
    const value = itemArr[1];
    if (!obj[key]) {
      obj[key] = value;
    } else {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    }
  });
  return obj;
};

const url = "?a=0&a=1&c=0&url=url内容";
console.log(queryParams(url));

try {
  return Promise.reject(2);
  //return await Promise.reject(3);
} catch (e) {
  console.log(e);
}
