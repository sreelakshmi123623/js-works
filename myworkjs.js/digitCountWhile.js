// finding count of digits in a number


var number = 656746;

var count = 0;

while (number!=0) {
    count++;
    number = Math.floor(number/10);
}
console.log(count);
