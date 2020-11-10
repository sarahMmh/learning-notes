/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    const index = nums.indexOf(num);
    console.log(index);
    if (index > 0 && index != i) {
      return [i, index];
    }
  }
  return null;
};
const nums = [5, 3, 2, 6],
  target = 8;
console.log(twoSum(nums, target));
