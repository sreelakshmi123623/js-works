var dbPassword  = "Passworddone";
var dbBalance = 80000;
var userAmount = 60500;
var userPassword =  "Passworddone";


if (dbPassword==userPassword) {//Passworddone T
    if (userAmount%100==0) {//60500%100==0  T
        if (dbBalance>=userAmount) { //80000>=60500 T
            console.log("Payment Proceed");//print
            
        }
        else{
            console.log("Transaction Faild");
            
        }
    }
    else{
        console.log("Amount is Not multiple of 100");
        
    }
}
else{
    console.log("Incorrect Password");
    
}