var words = ["thoughtful","meaningful","beautiful","powerful","housefull"]


var upperWords=words.map(w=>w.toUpperCase())

console.log(upperWords);


var onlyWordsFul=words.filter(w=>w.endsWith("full"))
console.log(onlyWordsFul);
