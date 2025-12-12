var num1 = 12;

var num2 = 24;

var gcd = 0;

var minnumber = num1<num2?num1:num2

for(i=1;i<=minnumber;i++){
    if (num1%i==0 && num2%i==0) {
         gcd = i;
    console.log(gcd);
    }
   

}
//console.log(gcd);
