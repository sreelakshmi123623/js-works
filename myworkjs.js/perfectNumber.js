var  limit = 28;

var sum=0;

var i;

for(i=0;i<limit;i++){
    if (limit%i==0) {
        sum = sum+i;
        
    }
}
if (sum==limit) {
    console.log(`${limit} is a perfect number`);
    
}
else{
    console.log(`${limit} is not a perfect number`);
    
}