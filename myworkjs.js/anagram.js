function isanagram(text1,text2){
    let isanagram=true;
    if(text1.length!=text2.length){
        isanagram=false;
    }
    for(let ch of text1){
        if(text2.indexOf(ch)==-1){
            isanagram=false;
            break;
        }
    }
    return isanagram;
}
console.log(isanagram("silent","listen"));
