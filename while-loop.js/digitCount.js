// finding count of digits in a number

var number = 374856;

var count = 0;

while (number!=0) {//374856!=0->T 37485!=0->T 3748!=0->T 374!=0->T 37!=0->T 3!=0->T 0!=0->F
    count++;//0+1=1 2 3 4 5 6
    number = Math.floor(number/10);//374856/10->37485 37485/10->3748 3748/10->374 374/10->37 37/10->3 3/10->0
}
console.log(count);//prints 6
