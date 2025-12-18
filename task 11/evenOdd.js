let arr =[34,56,9,34,25,64];

let evenCount = 0;
let oddCount = 0;
for(let n of arr){
    if(n%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log(`count of even number is ${evenCount} and count of odd numbers is ${oddCount}`);
