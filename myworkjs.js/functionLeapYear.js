function isLeap(year){
    if(year%100==0 && year%400==0 || year%1==0 && year%4==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLeap(2020));
console.log(isLeap(1900));
console.log(isLeap(2025));

