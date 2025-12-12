//revers a sting "JAVASCRIPT" using for loop

var text ="JAVASCRIPT";

var stringlength = text.length-1;

var result ="";

console.log(stringlength);


for(i=stringlength;i>=0;i--){
    result += text[i];
}
console.log(result);
