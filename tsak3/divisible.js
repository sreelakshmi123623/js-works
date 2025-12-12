//count how many between 1 and 200 are divisible by 3 and 5


var num = 200;

var count =0;

for(i=1;i<=num;i++){
    if (i%3==0 && i%5==0) {
        count++;
    }
    
}
console.log(count);
    