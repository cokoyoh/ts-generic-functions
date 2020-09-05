type someFunction<T> = (x: T) => T;

function applyFunction<T>(f:someFunction<T>, x: T) {
  return f(x);
};

console.log(applyFunction(n => n + 1, 2));
