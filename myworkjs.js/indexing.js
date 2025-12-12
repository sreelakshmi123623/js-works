//index - can apply in string ,array ,object


var text = "racecar";

var result = "";


for(i=6;i>=0;i--){
    result += text[i];
}
if (result==text) {
    console.log("palindrom");
    
}
else{
    console.log("not a palindrom");
    
}
