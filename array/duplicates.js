var arr =[10,11,12,12,13,14,15,15]

let left=0
let right = left+1;//or can mention 1 

while(left<arr.length-1){
    let difference=arr[right]-arr[left]
    if(difference==0){
        console.log(`${arr[left]} duplicates`);
        
    }
    left++
    right++
}