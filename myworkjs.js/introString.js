var companyName = " luminar technolab "

//length, -attribute

console.log(companyName.length);

//toUpperCase

console.log(companyName.toUpperCase());


//toLowerCase
console.log(companyName.toLowerCase());


//split(" ")
console.log(companyName.split(" "));
console.log(companyName.split(""));//for spplit each letters

//charAt()
console.log(companyName.charAt(4));


//at()
console.log(companyName.at(-6));


//concat()
//console.log(companyName.concat(".com"));

//slice( , )
console.log(companyName.slice(0,7));

//substring( , )
console.log(companyName.substring(7,17));

//trim  //trimStart  //trimEnd
console.log(companyName.trim());

//padStart()
console.log(companyName.padStart(25,"*"));

//padEnd()
console.log(companyName.padEnd(30,"$"));


//repeat()
console.log(companyName.repeat(3));

//replace
console.log(companyName.replace("technolab","technohub"));

//replaceAll
console.log(companyName.replaceAll("n","^"));

//indexOf
console.log(companyName.indexOf("luminar"));
console.log(companyName.indexOf("technolab"));
console.log(companyName.indexOf("team"));//if we enter undefined value it output -1
console.log(companyName.indexOf("n"));


