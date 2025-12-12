// print each digits in a number 98765


var num = 98765;

var digit = 0;


for (;num!=0;) {
    let digit = num % 10;
    console.log(digit);
    num = Math.floor(num / 10);

}

