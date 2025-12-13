
var fact = 1;


function FindFact(num) {
    for(i=1;i<=num;i++){
        fact = fact*i;
    }
    return fact;
}
console.log(FindFact(7));
