let arr = [25,12,14,8,4,2,16,15]

let isSorted=true
for(i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        isSorted =false
    }
}
console.log(isSorted);
