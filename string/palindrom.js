function isPalindrom(text) {

    let isword=true;
    let result = "";
    for(let i=text.length-1;i>=0;i--){
        result+=text[i];
       
    }
     if (text!=result) {
            isword=false;
        }
    return isword;
    
}
console.log(isPalindrom("center"));
console.log(isPalindrom("racecar"));
console.log(isPalindrom("malayalam"));

//intead this
//   if (text!=result) {
//             isworld=false;
//         }
//     return isworld;
    
//simply use this
//return result==text =>answer will be true or false