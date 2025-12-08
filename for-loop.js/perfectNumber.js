//6 is a perfect number because common divisors sum is 1,2,3 = >6
//28 is a perfect number because common divisors sum is 1,2,4,7,14 => 28
var  number = 6;

var sum = 0;



for(let i=1;i<number;i++){

if(number%i==0){
    sum = sum+i;
}
}
if(sum==number){
    console.log(`${number} is a perfect number`);
    
}
else{
    console.log(`${number} is  not a perfect number`);
    
}
