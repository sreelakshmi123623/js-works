// to capitalize the  first letter of each word in a sentance


var sentance = "this is a sentance";
var result= "";
var newSentance = sentance.split(" ");

for(let ch of newSentance ){
    result += ch.charAt(0).toUpperCase()+ch.slice(1)+" ";
}
console.log(result);
