function curry(a) {
    return function(b) {
        return a + b;
    }
}

const sum = curry(2)(8);
console.log(sum);