var expenses =[24000,45900,37000,74000,35000,34500,21000,46000,75000,35600,54000]
//listing in using of 
for(let ch of expenses){
    console.log(ch);
    
}

//listing in using index
for(i=0;i<expenses.length;i++){
    console.log(expenses[i]);
    
}

//for find the total expense
let result =0;
for(let ch of expenses){
    result+=ch;
}
console.log(result);


//finding the hieghest expense
console.log("\nfinding the hieghest expense");
var max = 0;
for(let ch of expenses){
    if(ch>max){
        max=ch;
        
    }
    
}
console.log(max);


//finding the lowest
console.log("\nfinding the lowest expense");
var low = expenses[0];
for(let ch of expenses){
    if(ch<low){
        low=ch;
    }
}
console.log(low);




