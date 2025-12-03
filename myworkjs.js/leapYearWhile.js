// display all leap years from 1200 to 2020

var i = 1200;

while (i<=2020) {
    if (i%100==0 && i%400==0 || i%100!=0 && i%4==0) {
        console.log(i);
        
    }
    i++;
}