let arr = [1,3,4,5,6]
let left = 0
let right =left+1


while(left<arr.length-1){//left only goes till the  3rd index //bcuz right will be in the 4th index
let difference = arr[right]-arr[left];
if(difference!=1){
    console.log(`${arr[left]+1} is missing`);
    break;
}
left = right;
right++;
//left++
//right++
}



