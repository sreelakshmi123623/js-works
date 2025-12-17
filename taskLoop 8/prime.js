//use for loop to check whether a number is prime number
function isPrime(number){
    let isPrime = true;
for(i=2;i<number;i++){
    if(number%i==0){
        isPrime=false;
        break;
    }
}
return isPrime;
}
console.log(isPrime(3));

console.log(isPrime(6));

console.log(isPrime(12));

console.log(isPrime(37));


