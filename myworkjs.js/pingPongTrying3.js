//find if a number is divisible by 2 , 8,38

var num = 342;       //342=38    42=2     48=8

if (num%38==0) {//342%38==0 T
    console.log(`${num} is divisible by 38`);// print
    
    
}
else if (num%8==0) {
    console.log(`${num} is divisible by 8`);
    
}
 else if (num%2==0) {
    console.log(`${num} is divisible by 4`);
    
}