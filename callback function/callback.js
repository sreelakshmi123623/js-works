function callback(n){//we can use arrrow function like function callback(n)=>{ return n**2}//callback is pre defined
    return n**2//3**2=9
}
console.log(callback(3));

function call(callback,n){
    return callback(n)*n//9*2=27
}
console.log(call(callback,3));//27


function sayHello(){
    console.log("Hello");
    
}
setInterval(sayHello, 1000)//it prints hello in every 3000ms => 3 seconds(1000ms=>1 second)//setInterval is predefined



function sayHelloo(){
    console.log("Hellooo");
    
}
setTimeout(sayHelloo,3000)//it prints hellooo after it  waits for 3 second//setTimeout is pre defined


