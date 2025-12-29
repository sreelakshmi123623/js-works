let arr = [12,5,20,8,15,30,7,25,10,18]

let sum =0
for(i=0;i<arr.length;i++){
    if([i]%2==0){
        sum +=arr[i]
    }
}
console.log(sum);
