let arr = [25,12,14,8,4,2,16,15]

let element = 14

let index = 0

for(i=1;i<arr.length-1;i++){
    if(arr[i]==element){
        index=i;
        break;
    }
}
console.log(index);
