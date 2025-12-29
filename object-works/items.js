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

// for(let key in vegitables){
//     console.log(key,vegitables[key]);
    
// }

//display all vegitable names available under rs 65
// console.log("\n vegitables price less than 65");

// var check=65
// for(let key in vegitables){
//     if(vegitables[key]<check){
//         console.log(key);
        
//     }
// }

//display costly product

var maxPrice=0

for(let key in vegitables){
    let currentPrice=vegitables[key]//35//60//50//70.......
    if(currentPrice>maxPrice){//35>0-t //60>35-T //50>60-F//70>60-t.....
        maxPrice=currentPrice//35//60//70.........
    }
}
console.log(maxPrice);

//incase if there have more than one max price view the value 
for(let key in vegitables){
    if(maxPrice==vegitables[key]){
        console.log(key,maxPrice);
        
    }
}