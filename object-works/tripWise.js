

var  expenses={
    ami:780,
    ansu:680,
    johny:1000,
    arya:500,
    sanju:750,
    jeevan:1500

}
//total
var  total=0
for(let key in expenses){
   total+=expenses[key]//expenses updating with total

}
console.log("total is",total);


//who spend most 
console.log("\n most spended amount");

var  maxExp=0
for(let key in expenses){
   let maxFinding=expenses[key]
    if(maxFinding>maxExp){
        maxExp=maxFinding
    }
}
console.log(maxExp);


console.log("\n who spend most");

for(let key in expenses){
    maxFinding=expenses[key]
    if(maxExp==maxFinding){
        console.log(key,maxFinding);
        
    }
}


//split by person

var split=total/Object.entries(expenses).length
console.log(split);


console.log("\nbalace split of each person");

var  check={}
for(let key in expenses){
    let amount=expenses[key]
    check[key] = split-amount
  
}
console.log(check);
