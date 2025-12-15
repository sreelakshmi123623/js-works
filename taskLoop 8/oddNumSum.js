// using while loop to find the sum of odd digits in a given number


var num = 6579;
var sum = 0;

while (num>0) {
    let digit = num%10;
    if(digit%2!=0){
        sum +=digit;
    }
     num=Math.floor(num/10);

}
console.log(sum);



