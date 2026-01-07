var number =[10,11,12,13,14,15,16]

//map()

//addFive
// let addFive=number.map(num=>num+5)

// console.log(addFive);


//using for of
// let result =[]
// for(let num of number){
//     result.push(num+5)
// }
// console.log(result);

//squares
// let square = number.map(num=>num**2)

// console.log(square);

//cubes
// let cube = number.map(num=>num**3)
// console.log(cube);






//filter()//only return if the condition is true //Returns the elements of an array that meet the condition specified in a callback function.

//>13
// numGTThirteen=number.filter(num=>num>13);
// console.log(numGTThirteen);

//even
var isEven=number.filter(num=>num%2==0)
console.log(isEven);

//odd
var isOdd=number.filter(num=>num%2!=0)
console.log(isOdd);




//var number =[10,11,12,13,14,15,16]
//reduce()//for process and pic a single value

var total=number.reduce((n1,n2)=>n1+n2)
console.log(total);

var  product = number.reduce((n1,n2)=>n1*n2)
console.log(product);

var maxNumber=number.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNumber);

var minNumber=number.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNumber);









//sort()
var numbers =[11,10,13,14,12,16,15]
                   // a-b (accending oreder)   //b-a (decending order)
numbers.sort((n1,n2)=>n1-n2)
console.log(numbers);

                    // b-a (decending order)
numbers.sort((n1,n2)=>n2-n1)
console.log(numbers);
