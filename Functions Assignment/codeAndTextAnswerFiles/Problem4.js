function calculateTax(income) {
    let tax;
    if(income > 0 && income <= 250000) {
        tax = "nil";
        return tax;
    } else if (income > 250000 && income <= 500000) {
        tax = 12,500;
        return tax;
    } else if (income > 500000 && income <= 1000000) {
        tax = 100000;
        return tax;
    } else if (income > 1000000) {
        tax = 262500;
        console.log("Rs.262500 for net income up to Rs.15 lakh");
        return tax;
    }
}

console.log(calculateTax(230000));
console.log(calculateTax(420000));
console.log(calculateTax(740000));
console.log(calculateTax(1240000));