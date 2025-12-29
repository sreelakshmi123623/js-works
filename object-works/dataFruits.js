var fruits={
    orange:200,
    apple:150,
    cherry:100,
    guva:90,
    banana:70,
    grapes:50
}


//display products whose price >100

for(let [k,v] of Object.entries(fruits)){
    if(v>100){
        console.log(k,v);
        
    }
}

//display products available in the  range of 50 to 150

for(let [k,v] of Object.entries(fruits)){
    if(v>50&&v<150){
        console.log(k,v);
        
    }
}

//or

var priceFilter=Object.entries(fruits).filter(item=>item[1]>50&&item[1]<150)
console.log(priceFilter);
//filter=works if the condition is true




//display costly products

var maxPrice=0

for(let [k,v] of Object.entries(fruits)){
    if(v>maxPrice){
        maxPrice=v
        console.log(k,maxPrice);
        
    }
}

//or

let  costlyProduct=Object.entries(fruits).reduce((itm1,itm2)=>itm1[1]>itm2[1]?itm1:itm2)
console.log(costlyProduct);





//display products with low cost

var cheapProduct=Object.entries(fruits).reduce((itm1,itm2)=>itm1[1]<itm2[1]?itm1:itm2)
console.log(cheapProduct);
