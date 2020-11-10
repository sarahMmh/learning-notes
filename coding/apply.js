Function.prototype.myApply = function (context, args) {
  if (typeof this != "function") {
    throw new TypeError("必须是function");
  } else if (context == null) {
    context = window;
  }
  const calSymbol = new Symbol();
  context[calSymbol] = this;
  const result = context[calSymbol](...args);
  delete context[calSymbol];
  return result;
};
