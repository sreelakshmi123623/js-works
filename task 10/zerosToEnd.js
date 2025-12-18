//move zeros to end

let arr =[1,0,2,0,3];
let zeros = 0;
let newArr =[];
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
       zeros++; 
    }
    else{
        newArr.push(arr[i]);
    }
}
for(i=0;i<zeros;i++){
    newArr.push(0);
}
console.log(newArr);
