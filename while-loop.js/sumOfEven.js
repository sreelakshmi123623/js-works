// find the sum of even numbers upto limit


var limit = 10;

var sum = 0;

var i = 1;

while (i<=limit) {//1<=10->T  2<=10->T 3<=10->T 4<=10->T 5<=10->T 6<=10->T 7<=10->T 8<=10->T 9<=10->T 10<=10->T 11<=10->F
    if (i%2==0) {//2 4 6 8 10
        sum=sum+i;//0+2=2 2+4=6 6+6=12 12+8=20 20+10=30
    }
    i++;//1+1=2 2+1=3 3+1=4 4+1=5 5+1=6 6+1=7 7+1=8 8+1=9 9+1=10 10+1=11
}
console.log(sum);
