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
var unpaidst=Object.entries(expenses).filter(value=>value[1]==0)
console.log(unpaidst);


//paid students

var paidStudents=Object.entries(expenses).filter(value=>value[1]!=0)
console.log(paidStudents);


//paid greater than 250
var paidGreater=Object.entries(expenses).filter(value=>value[1]>250)
console.log(paidGreater);


//total expenses
var total =Object.entries(expenses).reduce((sum,st)=>sum+st[1],0)
console.log(total);

//individual split
var individualSplit=total/Object.entries(expenses).length
individualSplit=Math.round(individualSplit)
console.log(individualSplit);

//pending credit or debit
var split={}

for(let [k,v] of Object.entries(expenses)){
    split[k]=individualSplit-v
}
console.log(split);
