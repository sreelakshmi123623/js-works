const productSale={
    laptop:120,
    mobile:250,
    headphones:400,
    smartwatch:180,
    tablet:90,
    camera:60,
    printer:45,
    keyboard:210,
    mouse:320,
    speaker:150
}

//trending product

//not in this type ,by using object methods
// var maxSale=0
// for(let key in productSale){
//     let trending=productSale[key]
//     if(trending>maxSale){
//         maxSale=trending
//     }
// }
// console.log(maxSale);

let trendingProduct=Object.entries(productSale).reduce((itm1,itm2)=>itm1[1]>itm2[1]?itm1:itm2)
console.log(trendingProduct);




//product with lowest sale

let lowestSale=Object.entries(productSale).reduce((itm1,itm2)=>itm1[1]<itm2[1]?itm1:itm2)
console.log(lowestSale);




//product with sales count>200

//not in this type ,by using object methods
// console.log("\nproduct with sales count>200");
// var count=0
// for(let key in productSale){
//     if(productSale[key]>200){
//         count++
//     }
// }
// console.log(count);

 console.log("\nproduct with sales count>200");

let saleGreaterThan=Object.entries(productSale).filter(item=>item[1]>=200)
console.log(saleGreaterThan);




//total number of product sold

//not in this type ,by using object methods
// console.log("\ntotal number of product sold");
// var total=0
// for(let key in productSale){
//     total +=productSale[key]
// }
// console.log(total);

console.log("\ntotal number of product sold");

let soldproduct=Object.entries(productSale).reduce((sum,itm1)=>sum+itm1[1],0)
console.log(soldproduct);

//or

var sum=0
for(let [k,v] of Object.entries(productSale)){
     sum+=v
}
 console.log(sum);




// in descending order

//not in this type ,by using object methods
// let converting = Object.entries(productSale)//convert object to array
// .sort((a,b)=>b[1]-a[1])
// console.log(converting);
console.log("\nin descending order");

let  decreasingOrder=Object.entries(productSale).sort((a,b)=>b[1]-a[1])
console.log(decreasingOrder);





console.log("\n\nemployee");


const employeeLeave={
    arun:5,
    sree:2,
    rahul:8,
    anju:4,
    manoj:10,
    divya:1,
    akhil:6,
    neethu:3
}

console.log("\nleave count of manoj",employeeLeave.manoj);


console.log("\nall emplyees name",Object.keys(employeeLeave));


console.log("\nlist leaves",Object.values(employeeLeave));

console.log("\ntotal number of employees",Object.entries(employeeLeave).length);

if("akhil" in employeeLeave){
    console.log("\nexists");
    
}
else{
    console.log("\nNot exists");
    
}

//adding new employee vishnu with 7 leaves
employeeLeave.vishnu=7
console.log(employeeLeave);


//updating anju's leave to 5
employeeLeave.anju+=1
console.log(employeeLeave);

//deleting divya from the list
delete employeeLeave.divya
console.log(employeeLeave);


console.log(employeeLeave);

let convertingToUpper ={};

for(let key in employeeLeave){
    convertingToUpper[key.toUpperCase()]=employeeLeave[key]
}
console.log(convertingToUpper);
