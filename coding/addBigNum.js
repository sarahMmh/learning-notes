/**
 *
 * @param {*} num1  第一个数字
 * @param {*} num2 第二个数字
 * 需要考虑到如果位数太长的话会有精度丢失，并且会计算成科学技术服务
 * 因此考虑按位计算，逢十进一
 * 因此考虑将两个数的长度补齐好计算
 * 其他方法先将数字反转在计算的道理是一样的
 * js能存储的最大的数是：Math.pow(2,53)
 */
function addBigNum(num1, num2) {
  num1 = "" + num1;
  num2 = "" + num2;
  // 因为值一旦超过了Math.pow(2,53)数字精度相比之前会丢失
  // 因此考虑按位相加，注意：满10进1
  const num1Len = num1.length;
  const num2Len = num2.length;
  let maxLength = num1Len; //默认将最大长度是其中一个长度的值
  // 将长度比较小的数字前面补0，补成和另外一个数相同的长度
  if (num1Len >= num2Len) {
    num2 = "0".repeat(maxLength - num2Len) + num2;
  } else {
    maxLength = num2Len;
    num1 = "0".repeat(maxLength - num1Len) + num1;
  }

  // 从最后一位，按位相加，满10进1，并且下一位计算的时候，要加上进位
  let add = 0; //默认不进位
  let results = []; //保留的结果
  for (let i = maxLength - 1; i >= 0; i--) {
    // ((num1+num2)+add)的结果除以10，商是要进位的，余数是要保留的,并且add的结果是商
    const sum = +num1[i] + +num2[i] + +add; // 一定要记得将字符串转换为数字，否则就是字符串的拼接
    let re = sum % 10;
    add = Math.floor(sum / 10);
    results.unshift(re); //因为是从末位开始计算的，所以应该向数组前边添加数据
  }
  if (add > 0) {
    //如果最后有进位，不要忘记加上去
    results.unshift(add);
  }
  console.log(results.join(""));
  return results.join();
}
const num1 = "1234567899999999999";
const num2 = "9007199254740991";

addBigNum(num1, num2); //结果应该是：1243575099254740990
