
var  expenses={
    ami:780,
    ansu:680,
    johny:1000,
    arya:500,
    sanju:750,
    jeevan:1500

}

console.log(expenses);//=>print the object expenses
for(let key in expenses){
    console.log(key);
    
}


//object.keys(objectName)=>return all keys as array
names=Object.keys(expenses)
console.log(names);

for(let key of Object.keys(expenses)){ //=>take each string from an array
    console.log(key);
    
}

//object.values(objectName)=>return all values as array
value=Object.values(expenses)
console.log(value);


for(let val of Object.values(expenses)){//=>take each string from an array
    console.log(val);
    
}


//Object.entries(objectName)=>sub array for each property,value inside an main array[[key,value]]=> [[ 'ami', 780 ],[ 'ansu', 680 ],[ 'johny', 1000 ],[ 'arya', 500 ],[ 'sanju', 750 ],[ 'jeevan', 1500 ]]
console.log(Object.entries(expenses));


