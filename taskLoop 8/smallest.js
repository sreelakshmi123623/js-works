//write a program to find the smallest digit in a given number by using while loop

var number = 3698;
var smallest=5;//maximum smallest digit
while (number>0) {
    let digit = number%10;
    if(digit<=number){
        smallest =digit;
    }
    number = Math.floor(number/10);
}
console.log(smallest);
