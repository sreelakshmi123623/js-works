// reverse a number 1234


var number = 1234;


while (number!=0) {
    let digit = number%10;
    console.log(digit);
    number = Math.floor(number/10);
}