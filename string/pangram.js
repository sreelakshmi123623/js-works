//1st
//pangram - a sentance wich have all words in the alphabets


//let word="the quick brown fox jumps over lazy dog";


// let alphabets ="abcdefghijklmnopqrstuvwxyz";

// var isPangram =true;
// for(let ch of alphabets){//can use al instead of ch 
//    if(word.indexOf(ch)==-1){//can use al instead of ch 
//     isPangram =false;
//     break;
//    }
  
// }
// console.log(isPangram);






//for refference
// var names="hari";

// for(let ch of names){

// console.log(ch);
// }

//ouput will be
//h
//a
//r
//i





//2nd 
function isPangram(word){
    let pangramWord=true;
    let words ="abcdefghijklmnopqrstuvwxyz";
    for(let ch of words){
        if(word.indexOf(ch)==-1){
            pangramWord=false;
        }
    }
    return pangramWord;
}
console.log(isPangram("the quick brown fox jumps over lazy dog"));
console.log(isPangram(" quick brown fox jumps over lazy dog"));//false because it doesnt have all the alphabet characters
