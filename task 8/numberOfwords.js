//find the total number of words in a sentance

//split(" ") => used for separate words in  a sentance


function totalNumberOfWords(sentance) {

return sentance.trim().split(" ").length;
    
}
console.log(totalNumberOfWords("good morning world "));
