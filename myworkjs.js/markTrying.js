var mark1 = 89;
var mark2 = 90;
var mark3 = 50;

totalmark = mark1+mark2+mark3;
console.log(totalmark);


if (totalmark>=200 && totalmark<251) {
    console.log("Grade A");
    
}
else if (totalmark>=150 && totalmark<201) {
    console.log("Grade B");
    
}
else if (totalmark>=100 && totalmark<151) {
    console.log("Grade C");
    
}
else{
    console.log("Try Again");
    
}