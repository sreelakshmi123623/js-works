//capitaliize first letter of each word using string methos

var str ="capitalizing first letter of each word";

var cap = str.split(" ");

var caps = "";
for(let le of cap){
 caps += le.charAt(0).toUpperCase()+le.slice(1)+" "

}
console.log(caps);

