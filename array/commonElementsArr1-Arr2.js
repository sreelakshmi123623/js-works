//common element in both arr1,arr2
var arr1 = [10,11,12,20,30]//i
var arr2 =[7,11,15,20,25]//j
let j=1;
let i=1;
while(i<arr1.length &&j<arr2.length){
        if(arr1[i]<arr2[i]){
            i++;
           
        }
        else if(arr1[i]>arr2[i]){
            j++;
            
        }
        else if(arr1[i]==arr2[i]){
        console.log(`${arr1[i]} is common in both array`);
            i++;
            j++;
        }
    }
    