var fruits={
    orange:200,
    apple:150,
    cherry:100,
    guva:90,
    banana:70,
    grapes:50
}


//display products whose price >100

let greaterThan=Object.entries(fruits).filter(item=>item[1]>100)
console.log(greaterThan);


//display products available in the  range of 50 to 150

let priceRange=Object.entries(fruits).filter(item=>item[1]>50&&item[1]<150)
console.log(priceRange);

//display costly products

let costlyProduct=Object.entries(fruits).reduce((itm1,itm2)=>itm1>itm2?itm1:itm2)
console.log(costlyProduct);

//display products with low cost
let lowest=Object.entries(fruits).reduce((itm1,itm2)=>itm1[1]<itm2[1]?itm1:itm2)
console.log(lowest);
