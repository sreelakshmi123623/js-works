//find the second largest

var num1 = 3000;
var num2 = 600;
var num3 = 100;


if (num1<num2 && num1>num3 || num1>num2 && num1<num3) { //3000<600 && 3000>100 || 3000>600 && 3000<100  F
    console.log(`${num1} is the second largest`);   
}
else if (num2<num1 && num2>num3 ||  num2>num1 && num2<num3){//600<3000 && 600>100 || 600>3000 && 600<100 T
    console.log(`${num2} is the second largest`);//print
    
}
else if (num3>num1 && num3<num2 || num3<num1 && num3>num2) {
    console.log(`${num3} is the second largest`);
    
}
else if (num1==num2 && num2==num3) {
    console.log("all are equal");
    
}