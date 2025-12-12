var text = "amanaplanacanalpanama";

var stringlength = text.length-1;

var result = "";

console.log(stringlength);


for(i=stringlength;i>=0;i--){
result += text[i];
}

console.log(result==text?"palindrom":"not an palindrom");
