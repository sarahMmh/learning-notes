/**
 * 节流：间隔n秒执行，如果n秒内多次触发，则会每秒触发一次
 * 使用场景：
 * 拖拽场景：
 * 缩放场景
 * 动画场景
 */

const throttle = (fn, delay) => {
  let canRun = true; //通过闭包保存一个标记
  return (...args) => {
    //   函数开头判断标记是否为true，不为true则return

    if (!canRun) return;

    // 立即设为false
    canRun = false;

    //   将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      fn.apply(this, args);
      // 最后在setTimeout执行完毕后再把标记设置为true表示可以执行下一次循环了
      canRun = true;
      // 当定时器没有执行的时候标记永远是false，那么在开头就会被return掉
    }, delay);
  };
};
