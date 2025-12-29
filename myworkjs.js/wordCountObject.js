var text ="this is a javascript program this javascript program is simple"

var word =text.split(" ")

var wordCount={}

for(let w of word){
    if(w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}
console.log(wordCount);
