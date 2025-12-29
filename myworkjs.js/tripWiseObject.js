//find the total expenses


var  expenses={
    ami:780,
    ansu:680,
    johny:1000,
    arya:500,
    sanju:750,
    jeevan:1500

}
var total =0

for(let key in expenses){
    total+=expenses[key]
}
console.log(total);

//who spend most
var  maxExp=0
for(let key in expenses){
   var maxFinding=expenses[key]
    if(maxFinding>maxExp){
        maxExp=maxFinding
    }
}
console.log(maxExp);


for(let key in expenses){
    let maxExp=expenses[key]
    if(maxExp==maxFinding){
    console.log(key,maxFinding);
    }
}

//split ny person

let split=total/Object.entries(expenses).length
console.log(split);


console.log("\nbalace split of each person");

var  check={}
for(let key in expenses){
    check = split-expenses[key]
    console.log(key,check);
    
}