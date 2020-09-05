function applyFunction(f, x) {
    return f(x);
}
;
console.log(applyFunction(function (n) { return n + 1; }, 2));
