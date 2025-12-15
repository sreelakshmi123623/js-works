//find a program to check whether two string are anagram 

var word1 = "silent";
var word2 = "listen";

let isAnagram = true;
for(let ch of word2){
    if(word1.indexOf(ch)==-1){

        isAnagram = false;
        break;
    }
}
console.log(isAnagram);

