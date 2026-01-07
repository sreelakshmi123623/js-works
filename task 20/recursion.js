// // print numbers from 1 to n

// function numbers(n,num =1){//5
    
//     if(num>n){//1>=5
//         return
//     }
//     console.log(num);

//     numbers(n,num+1)
    

// }

// numbers(5)

// //find the factorial of a number

// function factorial(n){

//     if(n==0){
//         return 1
//     }

//     return n*factorial(n-1)
    
// }

// console.log(factorial(5));

// //sum of n natural number

// function sumOf(n){
//     if(n==0){
//         return 0
//     }
//     return n+sumOf(n-1)
// }
// console.log(sumOf(4));


// //print numbers from n to 1

// function numbersP(n){//5 4 ...
//     if(n==0){
//         return
//     }
//     console.log(n);//5 4 ...
    
//     numbersP(n-1) //5-1  4-1 ....
// }

// numbersP(5)


// //count number of digits in a number 245

// function count(n){//245
//     if(n==0){
//         return 0
//     }
//     return 1+count(Math.floor(n/10))
    
// }
// console.log(count(245));


// //reverse a string

// function reverse(text){
//     if(text.length===0){
//         return text
//     }
//     return reverse(text.substring(1))+text[0]
// }
// console.log(reverse("hello"));

// //find the sum of elements in an array

// function sumOfArr(arr,index=0){
//     if(index===arr.length){
//         return 0
//     }
//     return arr[index]+sumOfArr(arr,index+1)
// }
// console.log(sumOfArr([1,2,3]));


//string is palindrom or not

// function palindrom(text){
//     if(text.length<=1){
//         return true
//     }
//     if(text[0]!==text[text.length-1]){
//         return false
//     }
//     return palindrom(text.slice(1,-1))
// }
// console.log(palindrom("madam"));
// console.log(palindrom("hello"));


//find the power of a function x^n

