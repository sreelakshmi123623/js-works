var obj= {a:4,b:2,c:1,d:3}

var sorted=Object.entries(obj).sort((a,b)=>a[1]-b[1])
console.log(sorted);
