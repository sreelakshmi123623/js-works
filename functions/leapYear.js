function isLeapYear(num){
    if(num%100==0 && num%400==0 || num%100!=0 && num%4==0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2025));
