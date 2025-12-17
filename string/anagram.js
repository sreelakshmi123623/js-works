// var word1 = "aab";

// var word2 = "abb";

// let isAnagram = true;
// for(let ch of word2){
//     if(word1.indexOf(ch)==-1){
        
//         isAnagram = false;
//     }
  
    
// }
//   console.log(isAnagram);



function isAnagram(word1,word2){
    let isAnagram = true;
    if(word1.length!=word2.length){
        isAnagram = false;
    }
    for(let ch of word2){
        if(word1.indexOf(ch)==-1){
            isAnagram = false;
            break;
        }
       
    }
 return isAnagram;
    
}
console.log(isAnagram("silent","listen"));
