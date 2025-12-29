let arr = [12,5,20,8,15,30,7,25,10,18]

let output=[]
let sum =0
for(i=0;i<arr.length;i++){
    sum +=arr[i]
}
    let avg = sum/arr.length
    for(i=0;i<arr.length;i++){
        if(arr[i]<avg){
        output.push(arr[i])
    }
    }
    

console.log(output);
