var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

//take unpaid students

var unPaid = Object.entries(expenses).filter(value=>value[1]==0)
console.log(unPaid);

//or


for(let [k,v] of Object.entries(expenses)){
    if(v==0){
        console.log(k);
        
    }
}

//paid students

var paid=Object.entries(expenses).filter(arr=>arr[1]!=0)
console.log(paid);


//or   taking each string from an array

for(let [k,v] of Object.entries(expenses)){
    if(v!=0){
        console.log(k);
        
    }
}



//paid greater than 250

var paid=Object.entries(expenses).filter(arr=>arr[1]>200)
console.log(paid);


//or

for(let [k,v] of Object.entries(expenses)){
    if(v>200){
        console.log(k);
        
    }
}


//total expenses
var total=0
for(let v of Object.values(expenses)){
    total+=v
}
console.log(total);


//or

var total=Object.entries(expenses).reduce((sum,item)=>sum+item[1],0)
console.log(total);


//or

var  total=Object.values(expenses).reduce((sum,e)=>sum+e)
console.log(total);


//individual split

var individualSplit=total/Object.entries(expenses).length
individualSplit=Math.round(individualSplit)//math.round for round the value
console.log(individualSplit);




//pending credit or debit


var split={}

for(let [k,v] of Object.entries(expenses)){
    split[k]=individualSplit-[v]
} 
console.log(split);
