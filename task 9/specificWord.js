//write a program to count how many times a specific word appears in a sentance

function countSpecific(sentance,word){
    let words = sentance.split(" ");
    let count =0;
    for(let w of words){
        if(w===word){
            count++
        }
}
return count;
}
console.log(countSpecific("java is easy and java is powerful","java"));
console.log(countSpecific("java is easy and java is powerful","is"));
