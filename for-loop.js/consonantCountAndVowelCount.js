// to display connsonantCount and vowelCount in a text


var text = "hellow hai";

var vCount = 0;

var cCount = 0;

//taking character one by one from the text => (let ch of text)

for(let ch of text){

    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
    vCount++;
}
else if(ch!=" "){
    cCount++;
}
    
}

console.log(`vowelcount is ${vCount}`);

console.log(`consonantcount is ${cCount}`);

