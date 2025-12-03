var dbPassword = "Password@1267";
var dbOtp = 12345;
var userPassword = "Password@1267";
var userOtp = 12344;

if (dbPassword==userPassword) {//Password@1267==Password@1267  T
    if (dbOtp==userOtp) {//12345==12344   F
        console.log("Succesfully Loged in");
        
    }
    else{
        console.log("Incorrect OTP");//print
        
    }
}
else{
    console.log("Incorrect Password");
    
}