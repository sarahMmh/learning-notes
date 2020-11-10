/** 防抖
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计算(在n秒内只执行一次，如果在n秒再次触发，则事件重置)
 * 使用场景：
 * 按钮提交场景：防止多次提交按钮，只执行最后一次提交的
 * 服务端验证场景：表单验证需要服务端配合，只执行一次连续的输入事件的最后一次，海域搜索联想词功能类似
 */
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer); //每当重新触发，把前一个timer清除掉，重新计算
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
