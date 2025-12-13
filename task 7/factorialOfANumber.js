//create a function to find the factorial of a number using loop

var result = 1;
function factorial(num) {//6
    for(i=1;i<=num;i++){//i=1 i<=6
        result = result*i;
    }
    return result;
}
console.log(factorial(5));
