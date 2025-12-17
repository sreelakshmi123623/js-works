// find how many numbers between 1 to 100 are divisivle by 3 and 5

var num = 100;
var count = 0;
for(i=1;i<=num;i++){
    if(i%3==0 && i%5==0){
        count++;
    }
}
console.log(count);
