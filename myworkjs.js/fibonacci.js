var limit = 10;

var prev = 0;

var cur = 1;

console.log(prev);

console.log(cur);




for(i=3;i<=limit;i++){
    let next = prev+cur;

    console.log(next);
    

    prev = cur;

    cur = next;


}