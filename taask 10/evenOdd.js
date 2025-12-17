var number =[2,3,4,5,6,7,7,8,3,9,9,7]

var evenCount = 0;
var oddCount = 0;
for(let n of number){
    if(n%2==0){
        evenCount++;
    }
    else if(n%2!=0){
        oddCount++;
    }
}
console.log(evenCount);
console.log(oddCount);

