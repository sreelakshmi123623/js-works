//function calling itself

//iterative approach =for loop,....
//recursive approach =function calling itself

//eg of recursive approach


function counter(n){//n=3 n=2 n=1 n=0
    if(n==0){//base condition,when the program stops //3==0 f 2==0 f 1==0 f  0==0 T
        return //return (goes out of the loop) on 0==0
    }
    console.log("Hello World");//print print print
    counter(n-1)//function calling itself //3-1=2  2-1=1 1-1=0
}
counter(3)


//display hai 5 times

function display(n){
    if(n==0){
        return
    }
    console.log("hai");
    display(n-1)
    
}
display(5)

//factorial of 5

function factorial(number){//each time functonName(parameter) goes to call stack
    if(number==0){
        return 1
    }
    return number*factorial(number-1)
}
console.log(factorial(4));



//display digits of number(123)

function digits(n){//123
    if(n==0){
        return
    }
    console.log(n%10);
    
    digits( n=Math.floor(n/10))//123=
}

digits(123)


//sum of digits(234)

function sumOf(n){//234
    if(n==0){
        return 0
    }

    return n%10+sumOf(Math.floor(n/10))
    // var digit=n/10//4

    // n=Math.floor(n/10)//23
}
console.log(sumOf(234));


//sum of numbers(5)=>1+2+3+4+5=15

function sumOfNum(number){
    if(number==0){
        return 0
    }
    return number+sumOfNum(number-1)
}
console.log(sumOfNum(5));


