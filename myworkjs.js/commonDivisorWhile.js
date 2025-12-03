//common divisors of two numbers

var num1 = 28;
var num2 = 21;

if (num1<num2) {
    min=num1;
    console.log("smallest number is ",min);
    
} else {
    min=num2;
    console.log("smallest number is ",min);
}

var i = 1;

while(i<=min) {
    if(num1%i==0 && num2%i==0) {
        console.log(i);
        
    }
 i++;   
}