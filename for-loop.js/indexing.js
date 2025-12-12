//index - can apply in string ,array ,object

var word = "racecar";

var result = "";

for(i=6;i>=0;i--){
    result = result+word[i];
}
if (word==result) {
    console.log("palindrom");
    
}
else{
    console.log("not a palindrom");
    
}
//console.log(result);
