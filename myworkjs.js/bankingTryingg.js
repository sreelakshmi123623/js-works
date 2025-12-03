var dbPassword = "password";
var dbBalance = 50000;
var userPassword = "password";
var userAmount  = 80000;


if (dbPassword==userPassword) {//password==password T
    if (userAmount<=dbBalance) {//80000<=50000 F
        console.log("Transaction Proceed");
        
    }
    else{
        console.log("Insufficient Bank Balance");//print
        
    }
}
else{
    console.log("Incurrect Password");
    
}