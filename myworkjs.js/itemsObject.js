var vegitables={
    onion:35,
    potatto:60,
    brinjal:50,
    carrot:70,
    beans:100,
    garlic:200,
    chilly:120,
    ginger:200
}

for(let key in vegitables){
    console.log(key,vegitables[key]);
    
}

//display vagitables price less than 65
console.log("\n\nvegitables less than rs 65");

for(let key in vegitables){
    if(vegitables[key]<65){
        console.log(key,vegitables[key]);
        
    }
}



//display maximum price
console.log("\n\n display maximum price");
 
var maxPrice=0
for(let key in vegitables){
    let currentPrice=vegitables[key]
    if(currentPrice>maxPrice){
        maxPrice=currentPrice
    }
}
console.log(maxPrice);


//for display the key of max price value 
console.log("\n\nfor display the key of max price value ");

for(let key in vegitables){
    if(maxPrice==vegitables[key]){
        console.log(key,maxPrice);
        
    }
}