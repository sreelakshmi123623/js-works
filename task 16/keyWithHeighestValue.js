var data={a:20,b:40,c:10}

var largest=Object.keys(data).reduce((key,val)=>data[key]>data[val]?key:val)
console.log(largest);
