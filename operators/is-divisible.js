var number = 16;
var rem1 = number %3==0;

// console.log(rem1==0);

var rem2 = number %5==0;

console.log(rem2&& rem1);//false


//or


var number = 15;

console.log(number%3==0 && number%5==0);//true
