let arr = [25,12,14,8,4,2,16,15]


let max=0
let min=arr[0]
for(let n of arr){
    if(n>max){
       max=n;
        
    }
    else if(n<min){
        min=n;
    }
}
console.log(`largest number is ${max} and smallest number is ${min}`);
