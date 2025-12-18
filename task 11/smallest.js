let arr =[34,56,9,34,25,64];
let min = arr[0];
for(let n of arr){
    if(n<min){
        min=n;
    }
}
console.log(min);
