function isPangram(sentance){
    var isPangramchck=true;
    var words = "abcdefghijklmnopqrstuvwxyz";
    for(let w of words ){
        if(sentance.indexOf(w)==-1){
            isPangramchck =false
            break;
        }
    }
    return isPangramchck;
}
console.log(isPangram("checkingggggggg"));
console.log(isPangram("the quick brown fox jumps over lazy dog"));
