// find the factorial of 5

var number = 5;

var fact = 1;

var i = 1;

while (i<=number) {//1<=5->T 2<=5->T 3<=5->T 4<=5->T 5<=5->T 6<=5->F
    fact=fact*i;//1*1=1 1*2=2 2*3=6 6*4=24 24*5=120
    i++;//1+1=2 2+1=3 3+1=4 4+1=5 5+1=6
}
console.log(`Factorial of ${number}!= is ${fact}`);
