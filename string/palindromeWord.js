function isPalindromWord(word){
    let result = "";
let newWord = word.toLowerCase().replaceAll(" ","");
console.log(newWord);
for(i=newWord.length-1;i>=0;i--){
    result +=newWord[i];
}
return result==newWord?"palindrom":"Not a palindrom";
    
}

console.log(isPalindromWord("A MAN A plan a canal panama"));

