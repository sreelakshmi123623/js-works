
function isPerfect(num){
    var result =0;
    for(i=1;i<num;i++){
        if(num%i==0){
        result +=i;
        }
    }
    return num==result?true:false
}
console.log(isPerfect(6));
console.log(isPerfect(7));
console.log(isPerfect(2));
