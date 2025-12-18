function isCenturyYear(num){
    if(num%100==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isCenturyYear(1900));
console.log(isCenturyYear(2020));
console.log(isCenturyYear(1800));


