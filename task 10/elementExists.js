///check whether a given number exists in an array or not

let num = 4;

let arr = [1,2,3,4,5];

let result = "number doesnt exists";
for(i=0;i<arr.length;i++){
    if(num==arr[i]){
        result= "number exists";
        break;
    }
}
console.log(result);
