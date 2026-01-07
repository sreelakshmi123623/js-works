//array[]
//to store and organize multiple  object  for make the retrieving proccess simple
//to store and organize multiple objects with same or different type
//keeps the order
//duplicates are allowed
//mutable => we can update after creation(after defining it)
//methods



//string ""
//define var str ="hello";
//keeps order
//duplicated allowed
//immutable
//methods


//set()
//doesnt have a order
//duplicates are not allowed



//1
// var color =["black","red","blue"];

// console.log(color);

//output -> [ 'black', 'red', 'blue' ]


//2
//    indexing  0      1    2     3     4     5     6     7      8     9    10
var expenses =[24000,45900,37000,74000,35000,34500,21000,46000,75000,35600,54000]


console.log("iterating array using index");

for(i=0;i<expenses.length;i++){
    console.log(expenses[i]);
    
}


console.log("\niterating array using of");

for(let e of expenses){
    console.log(e);
    
}


//3
//for find the total expense

var total=expenses.reduce((sum,e)=>e+sum,0)
console.log(total);

//or

console.log("\nfinding the total expenses");

var total = 0;

for(let e of expenses){
    total+=e;
}
console.log("Total Expense is => ",total);


//4
console.log("\nfinding the hieghest expense");

var maxExp = 0;

for(let e of expenses){
    if(e>maxExp){
        maxExp=e;
    }
}
console.log("maximum expense is :",maxExp);


//5
console.log("\nfor find the minimumm expense");

var minExp = expenses[0];

for(let e of expenses){
    if(e<minExp){
        minExp=e;
    }
}
console.log("minimum expense is :",minExp);
