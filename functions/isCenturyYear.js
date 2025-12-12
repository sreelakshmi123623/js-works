function centuryYear(num){
   if(num%100==0){
    return true;
   }
   else{
    return false;
   }
}

centuryYear
console.log(centuryYear(2000));
console.log(centuryYear(2020));
console.log(centuryYear(1990));
console.log(centuryYear(1200));

