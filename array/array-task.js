let numbers = [12,5,20,8,15,30,7,25,10,18]

//square of each number

var square = numbers.map(n=>n**2)
console.log(square);

//numbers less than 10

var lessThanTen=numbers.filter(n=>n<10)
console.log(lessThanTen);

//average of all numbers

var average=numbers.reduce((n1,n2)=>n1+n2)/numbers.length
console.log(average);


//smallest in the array

var smallest= numbers.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(smallest);


//array containing only odd numbers

var onlyOdd=numbers.filter(n=>n%2!=0)
console.log(onlyOdd);

//third smallest in the array



//substract 2 from each number
var substract=numbers.map(n=>n-2)
console.log(substract);


//find sum of only even numbers

var sumOfEven=numbers.filter(num=>num%2==0).reduce((sum,num)=>sum+num,0)
console.log(sumOfEven);


//count how many numbers are greater than the average value
var greaterThanAverage=numbers.filter(num=>num>average).length
console.log(greaterThanAverage);



//numbers divisible by zero
var divisible=numbers.filter(num=>num%5==0)
console.log(divisible);


//sort the array in decending order and display the first number

var sorting = numbers.sort((n1,n2)=>n2-n1).shift()
console.log(sorting);

//convert each array to a string
var converting=numbers.map(n=>n.toString())
console.log(converting);


//max and min



//multiply each number by its index number
var byIndex=numbers.map((num,index)=>num*index)
console.log(byIndex);

