//to display the sum of digits 543 (3+4+5)

var sum = 0;

var number = 543;


while (number!=0) {
    let digits = number%10;
    sum=sum+digits;
    number = Math.floor(number/10);
}
console.log(sum);
