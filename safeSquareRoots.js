function safeSqrt(n) {
    if (n < 0) {
        return { kind: 'failure', reason: 'Cannot find squareroot of negative numbers' };
    }
    if (n >= 0) {
        return { kind: 'success', value: Math.sqrt(n) };
    }
    return { kind: 'failure', reason: 'Invalid number' };
}

console.log(safeSqrt(-9));
console.log(safeSqrt(0));
console.log(safeSqrt(9));
