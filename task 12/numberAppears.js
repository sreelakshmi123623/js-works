let arr = [1,3,5,3,7,3]
let count=0;
for(let n of arr){
    if(n==3){
        count++;
    }
}
console.log(`3 repeated ${count} times`);
