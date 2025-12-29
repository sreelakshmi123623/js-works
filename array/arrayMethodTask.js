var words =["carrot","parrot","beetroot","apple"]
//create a new array contains length of all objects

var wordlength=words.map(w=>w.length)
console.log(wordlength);


//convert all elements to uppercase

var  converting=words.map(w=>w.toUpperCase())
console.log(converting);



//checking 

var word =words.filter(w=>w.includes("rr"))
console.log(word);


var largest=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(largest);


var sorting=words.sort((w1,w2)=>w1.length-w2.length)
console.log(sorting);
