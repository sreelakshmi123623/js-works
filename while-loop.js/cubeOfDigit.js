// find the sum of cube of each digit

var number = 153;

var sum = 0;


while (number!=0) {//153!=0->T 
    let digit = number%10; //153%10=3
    sum = sum+(digit**3);//0+(3**3)
    number = Math.floor(number/10);
    
}
console.log(sum);
