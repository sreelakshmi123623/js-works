//0+1=1              0 + 1 = 1
//1+1=2          previous + current = next
//1+2=3
//2+3=5
//3+5=8
//5+8=13
//8+13=21
//13+21=34


var limit = 15;

var prev = 0;

var cur = 1;

console.log(prev);

console.log(cur);

for(i=3;i<=limit;i++){
    let next = prev+cur;

    console.log(next);
    

    prev = cur;

    cur = next;
}



