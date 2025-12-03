var dbPassword = "password@123";
var dbotp = 456;
var userPassword = "password@123";
var userotp = 4567;

if (dbPassword==userPassword) {//password@123 == password@123  T
    if (dbotp==userotp) {   //456 == 4567   F
        console.log("Login Successful");
        
    } 
    else {
        console.log("Invalid OTP");//print
        
    }
}
else{
    console.log("Invalid Password");
    
}