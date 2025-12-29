var text ="this is a javascript program this javascript program is simple"

var word=text.split(" ")

var wordCount ={}

for(let w of word){
    if(w in wordCount){//checking each word ,if the word is present in wordCount or not 
        wordCount[w]+=1//update the word in wordCount
    }
    else{
        wordCount[w]=1//add the word in wordCount
    }
}
console.log(wordCount);
