
//if we apply 153 as a number to find if its amstrong or not ,if the number is amstrong number the output will be the same number as  we input.

//armstrong number


var number = 153;

var count = 0;

var numberCopy = number;

var original = number;

var sum = 0;

while (number!=0) {
    count++;
    number = Math.floor(number/10);

}
while (numberCopy!=0) {//153!0->T 15!=0->T 1!=0->T 0!=0->F
    let digit = numberCopy%10;//153%10=3 15%10=5 1%10=1
    let exponent = digit**count;//3**3=27 5**3=125 1**3=1
    sum = sum + exponent;//0+27=27 27+125=152 152+1=153
    numberCopy = Math.floor(numberCopy/10);//153/10=15 15/10=1 1/10=0
}
// if (sum==original) {
//     console.log("Armstrong number"); 
// }
// else{
//     console.log("Not an armstrong number");
    
// }

console.log(sum==original?"Amstrong number":"Not an amstrong number");



//by using ternary operator (single line code)