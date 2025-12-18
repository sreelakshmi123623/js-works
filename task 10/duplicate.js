//remove duplicate values from an array

let arr =[1,2,3,2,4,5];

let result = [];

for(i=0;i<=arr.length;i++){
    result = [... new Set(arr)];//it set in a Set() because Set() removes duplicates
}
console.log(result);
