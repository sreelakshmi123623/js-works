// find the sum of even numbers upto limit


var limit  = 20;

var sum = 0;

var i = 1;


while (i<=limit) {
    if (i%2==0) {
         sum=sum+i;
    }
   
    i++;
}
console.log(sum);
