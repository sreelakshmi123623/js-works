function isAnagram(word1,word2){
    let isAnagramCheck =  true;
    for(let ch of word1){
        if(word2.indexOf(ch)==-1){
            isAnagramCheck=false
        }
    }
    return isAnagramCheck;
}
console.log(isAnagram("silent","listen"));
console.log(isAnagram("noise","nose"));

