function isPangram(word){
    let isPangram=true
    let alph="abcdefghijklmnopqrstuvwxyz"

    for(let ch of alph){
        if(word.indexOf(ch)==-1){
            isPangram=false
            break;
        }
    }
    return isPangram
}
console.log(isPangram("the quick brown fox jumps over lazy dog"));
console.log(isPangram("checkingggggggg"));

