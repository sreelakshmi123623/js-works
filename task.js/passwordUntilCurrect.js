//password until currect

var dbpass = "opensesame";

var userpass = "opensesame";

var count = 0;

while (count<20) {
    console.log("What's the secret password");
    count++;
}

if (dbpass==userpass) {
    console.log("You may enter");
    
} else {
    console.log("incurrect password");
    
}