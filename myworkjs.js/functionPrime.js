function isPrime(num) {
    let primeNumber = true; 
    for(i=2;i<num;i++){
        num%i==0;
        primeNumber = false;
        break;
    }
    return primeNumber
}

console.log(isPrime(3));
console.log(isPrime(2));

