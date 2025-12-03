//find the smallest number from num1,num2,num3,num4
var num1 = 80;
var num2 = 60;
var num3 = 40;
var num4 = 30;

if (num1<num2 && num1<num3 && num1<num4) {// F num1 is not the smallest
    console.log(`${num1} is the smallest`);
}
else if (num2<num1 && num2<num3 && num2<num4) {//F num2 is not the smallest
    console.log(`${num2} is the smallest`);
}
else if (num3<num1 && num3<num2 && num3<num4) {
    console.log(`${num3} is the smallest`);   //F num3 is not the smallest
}
else if (num4<num1 && num4<num2 && num4<num3) {// T 
    console.log(`${num4} is the smallest`);//print num4=30 is the  smallest
    
}