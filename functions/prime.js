function isPrime(num){
    let primeNumber=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            primeNumber = false;
            break;
        }
    }
        return primeNumber;
     
}
console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(12));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(7));


// //or
// for(i=2;i<num;i++){
//         if(num%i==0)
//             return false
//         }


