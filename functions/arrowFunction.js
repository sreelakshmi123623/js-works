// arrow function =>
// syntax 

// variable = (p1,p2)=> expression

//variable = (p1,p2,p3,...){     //{} use for multiple expresion
//   return expression
//}



//add 
 
let add = (n1,n2)=>n1+n2;
console.log(add(20,40));

//sub

let sub = (n1,n2)=>n1-n2;
console.log(sub(30,20));

//last digit max
let lastDigit=(n1,n2)=>n1%10>n2%10?n1:n2;
console.log(lastDigit(424,367));

//last digit sum
let lastDigitSum = (n1,n2)=>n1%10+n2%10;
console.log(lastDigitSum(246,534));

//square

let square = (n)=>n**2;
console.log(square(3));

//maxTwo
let number = (n1,n2)=>n1>n2?n1:n2;
console.log(number(45,67));




//hoisting =only if a keyword is defined in a program called function, even if we call a function before defining it ,it runs(hoisting-it make the function keyword top before running )
