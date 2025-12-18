function isPalindrom(text){
    let result ="";
    let newText = text.toLowerCase().replaceAll(" ","");
    console.log(newText);
    for(i=newText.length-1;i>=0;i--){
        result += newText[i];
    }
    return result==newText?"Is a Palindrom":"Not a Palindrom"
}

console.log(isPalindrom("A MAN A plan a canal panama"));

