var words =["carrot","parrot","beetroot","apple"]

let arrayByLength=words.map(w=>w.length)
console.log(arrayByLength);

//all elements to upper case

let converting=words.map(w=>w.toUpperCase())
console.log(converting);

//checking rr 

let checking=words.filter(w=>w.includes("rr"))
console.log(checking);


//largest word

let largest=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(largest);
