var number =[2,3,4,5,6,7,7,8,3,9,9,7]

var max = 0;
var min = number[0];
for(let n of number){
    if(n<min){
        min=n;
    }
    else if(n>max){
        max=n;
    }
}
console.log(min);
console.log(max);
