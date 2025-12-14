//check if the given string is palindrom or not
function palindrom(str){
    var reverse = "";
    for(i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return str===reverse?"Palindrom":"Not a Palindrom";
} 
console.log(palindrom("racecar"));
console.log(palindrom("matter"));

