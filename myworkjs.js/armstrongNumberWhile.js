//armstrong number   //153 is an armstrong number and 370 ,1634 these are some armstrong number

var count = 0;

var number = 1634;

var sum = 0;

var numberCopy = number;

var nummberorg = number;

while (number!=0) {
    count++;
    number = Math.floor(number/10);
}
while (numberCopy!=0) {
    let digit = numberCopy%10;
    exponent = digit**count;
    numberCopy = Math.floor(numberCopy/10);
    sum = sum+exponent;
}
console.log(sum==nummberorg?"Armstrong number":"Not a armstrong number");


