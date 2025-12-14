function perfectNmber(num){
    var result = 0;
    for(i=1;i<num;i++){
      if( num%i==0){
        result = result+i;
    }
}
    return result==num?"Perfect Number":"Not a Perfect";
}

console.log(perfectNmber(6));
console.log(perfectNmber(7));
