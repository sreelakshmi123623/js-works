// print the digits one by one in reverse formalt

var number = 458;

while (number!=0) {

    let digit = number%10;
    console.log(digit);
    number = Math.floor(number/10);
    
    
}