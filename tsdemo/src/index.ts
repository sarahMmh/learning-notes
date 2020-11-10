import Cat from "./test";

let num: number = 1;
if (num == 2) {
  console.log(num);
}
let str = "4";

let strer: any = "seven";
strer = 0;

const kitty: Cat = new Cat("kitty");
kitty.say();

interface Person {
  age: number;
  name: string;
}
interface Person2 {
  name: string;
  age?: number;
  [propName: number]: any;
}
const tom: Person2 = {
  name: "zs",
};
let mySum = function (x: number, y: number): number {
  return x + y;
};
mySum(1, 3);
console.log(mySum(1, 3));
let mySum2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
function buildName(x: number = 1, y: number = x + 1) {
  return x + y;
}
console.log(buildName(2));
// (window as any).foo = 1;

enum Days {
  Sun = 7,
  Mon = 2,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 2); // true
console.log(Days["Tue"] === 3); // true
console.log(Days["Sat"] === 7); // true
console.log(Days["Sun"] === Days["Sat"]);
console.log(Days[7]);
