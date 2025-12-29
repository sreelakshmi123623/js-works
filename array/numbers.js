var number =[2,3,4,5,6,7,7,8,3,9,9,7]

//min number
//max number
//sum of number
//sum of odd numbers
//sum of  even numbers
//divisor of 3
//avg number
//most frequent of number


console.log("\nfor find the smallest number");

var min = number[0];
for(let n of number){
    if(n<min){
        min=n;
    }
}
console.log(min);


console.log("\nfor find the largest number");

var maxNum=0;
for(let n of number){
    if(n>maxNum){
        maxNum=n;
    }
}
console.log(maxNum);


console.log("\nfor find the sum of numbers");

var sum =0;
for(let n of number){
    sum+=n;
}
console.log(sum);


console.log("\nfor find the sum of odd numbers");

var sum =0;
for(let n of number){
    if(n%2!=0){
        sum +=n;
    }
}
console.log(sum);

console.log("\nfor find the sum of even numbers");

var sum =0;
for(let n of number){
    if(n%2==0){
        sum+=n;
    }
}
console.log(sum);

console.log("\nfor find divisible of 3");

var result ="";
for(let n of number){
    if(n%3==0){
        result += n + "\t";
    }
    
}
console.log(result);


console.log("\nfor find the average");

var sum =0;
for(let n of number){
    sum+=n;
}
console.log(sum/number.length);
