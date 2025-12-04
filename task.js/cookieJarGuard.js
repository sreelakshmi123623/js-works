//ask:can i eat a cookie ?
//if the user says anything except "yes,just one"
//keep saying "no cookies for you" stop when they say the currect phrase.

var count = 1;

var user = "no";//"yes,just one"

while (count<=1) {
    console.log("can i eat a cookie");
    count++;
}
if (user =="yes,just one") {
    console.log("thanku");
    
} else if (user!="yes,just one") {
    console.log("NO cookies for you");
    
}