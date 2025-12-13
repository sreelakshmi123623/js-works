function isCentury(num) {
    if(num%100==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isCentury(1900));
