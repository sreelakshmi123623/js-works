var num = 7;

var isprime = true;

for(i=2;i<num;i++){
    if(num%i==0){
        isprime=false;
        break;
    }
}
console.log(isprime?"number is prime":"number is not prime");
