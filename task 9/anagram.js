//write a program to check whether two strings are anagram 

function isAnagram(word1,word2){
    let isAnagram=true;
    if(word1.length!=word2.length){
        isAnagram=false;
    }
    for(let ch of word2){
        if(word1.indexOf(ch)==-1){
            isAnagram=false;
            break;
        }
    }
    return isAnagram;
}
console.log(isAnagram("silent","listen"));

