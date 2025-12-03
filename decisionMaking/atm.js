var dbPin = 123;
var dbBalance = 50000;
var userPin = 123;
var userAmount = 20000;


if (dbPin == userPin) {
    if (userAmount % 100 == 0) {

        if (userAmount <= dbBalance) {
            console.log("Withdrawel Successful");

        } else {
            console.log("insufficient Bank Balance");

        }
    }
    else {
        console.log("Enter multiple of 100");


    }
}
else {
    console.log("Incurrect Pin");

}