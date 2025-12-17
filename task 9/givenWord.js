//write a javascript program to check whether a string contains a given word 

function isContainAGivenWord(sentance,word){
    let sSentance = sentance.split(" ");
    
    for(let w of sSentance){
        if(w===word){
            return true;
        }
        
}
return false;
}
console.log(isContainAGivenWord("javascript program to check whether a string contains a given word","see"));
console.log(isContainAGivenWord("javascript program to check whether a string contains a given word","check"));

