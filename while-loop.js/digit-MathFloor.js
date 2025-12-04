//math.floor user to convert a floating number to integer (eg: 35.8  to 35  by using math.floor(number/10) here math.floor(358->35.8=35))


// print the digits one by one in reverse formalt

var number = 358;

while (number!=0) {// 358!=0->T 35!=0->T 3!=0->T 0!=0->F
    let digit = number%10; //358%10->8 35%10->5 3%10->3
    console.log(digit);//8 5 3
    number = Math.floor(number/10);//358/10->35.8=35 35/10->3.5=3 3/10->0.3=0
}