var dbPin = 12233;
var dbBalance = 50000;
var userPin = 12233;
var userAmount = 75000;


if (dbPin==userPin) {//12233==12233  T
    if (userAmount<=dbBalance) {//75000<=50000  F
        console.log("Withdrawal Successful");
        
    } else {
        console.log("Insufficient Bank Balance");// print
        
    }
}
else{
    console.log("Incorrect Pin");
    
}