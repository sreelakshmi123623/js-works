function isPalindrom(text){
    
    var result = "";
    for(i=text.length-1;i>=0;i--){
        result +=text[i];
    }
    return result==text?"is Palindrom":"Not a palindrom"
    
}
console.log(isPalindrom("tree"));
console.log(isPalindrom("racecar"));

