//write a program using while loop to calculate the power of a number eg:2^5 = 32

var number = 2;
var exponent = 5;
var result = 1;

let i=1;
while(i<=exponent){
    result = result*number;
    i++;
}
console.log(result);


