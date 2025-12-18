//merge two arrays

let  arr1 = [1,2,3,4];

let arr2 = [6,7,8,9,10];

let merge = [];

for(i=0;i<arr1.length;i++){
    merge.push(arr1[i]);
   
}
 for(i=0;i<arr2.length;i++){
        merge.push(arr2[i]);
    }
console.log("\n" + merge);
