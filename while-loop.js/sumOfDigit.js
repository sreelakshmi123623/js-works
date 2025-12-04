//to display the sum of digits 543 (3+4+5)


var number = 543;

var sum = 0;

while (number!=0) {//543!=0->T 54!=0->T 5!=0->T 0!=0->F
    let digit = number%10;//543%10=3 54%10=4 5%10=5
    sum=sum+digit;//0+3=3 3+4=7 7+5=12
    number=Math.floor(number/10);//543/10=54 54/10=5 5/10=0

}
console.log(sum);//12
