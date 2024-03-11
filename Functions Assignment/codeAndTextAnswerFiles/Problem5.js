function factorial(num) {
    if(num == 0) {
        return 1;
    }
    let fact = num * factorial(num -1);
    return fact;
}

console.log(factorial(5));

console.log(factorial(0));

console.log(factorial(6));

console.log(factorial(15));