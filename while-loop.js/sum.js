// finding the sum from 1 to 5

var limit = 5;

var sum = 0;

var i = 1;

while (i<=limit) {//1<=5->T 2<=5->T 3<=5->T 4<=5->T 5<=5->T 6<=5->F
    sum=sum+i;//0+1=1 1+2=3 3+3=6 6+4=10 10+5=15
    i++;//1++=2 2+1=3 3+1=4 4+1=5 5+1=6
}
console.log(sum);//print
