//century year could be a leap year and non century year could be leap year


//finding if the century year is a leap year or not
//finding if the year is century year => year%100==0
//making it a leap year =>year%400==0
//(year%100==0 && year%400==0)



//finding if non century year is a leap year or not
//finding if the year is non-century year => year%100!=0 
//making the non century year to leap yearm=> year%4==0
//(year%100!=0 && year%4==0)



var year = 2020;

if (year%100==0 && year%400==0 || year%100!=0 && year%4==0) { //((2020%100==0 && 2020%400==0) || (2020%100!=0 && 2020%4==0))  T
    console.log("is a leap year");                          //finding if a century year is leap year || finding if a non-century year is a leap year 
    
}
else{
    console.log("not a leap year");
    
}
