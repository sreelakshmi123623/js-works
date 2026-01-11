const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

//   Q1: Print the names of all programming languages in the array.
// var allPrgmLang=programmingLanguages.map(f=>f.name)
// console.log(allPrgmLang);


//   Q2: Print the total number of programming languages in the array.
// var names=programmingLanguages.map(f=>f.name).length
// console.log(names);

//   Q3: Print the languages that are popular.
// var popularLang=programmingLanguages.filter(f=>f.popular==true).map(f=>f.name)
// console.log(popularLang);


//   Q4: Print the names of the languages created after the year 2000.
// var yearafter=programmingLanguages.filter(f=>f.yearCreated>2000)
// console.log(yearafter);


//   Q5: Print the languages that are both functional and object-oriented.
// var both=programmingLanguages.filter(f=>f.paradigms.includes("Object-oriented") && f.paradigms.includes("Functional")).map(f=>f.name)
// console.log(both);


//   Q6: Print the names of the creators of the languages.
// var creatorName=programmingLanguages.map(f=>[f.name,f.creator])
// console.log(creatorName);


//   Q7: Print the names of languages that have "Script" in their name.
// var scriptsin=programmingLanguages.filter(f=>f.name.includes("Script")).map(f=>f.name)
// console.log(scriptsin);


//   Q8: Print the names of programming languages that were created before the year 1995.
// var  prgmlang=programmingLanguages.filter(f=>f.yearCreated<1995).map(f=>f.name)
// console.log(prgmlang);


//   Q9: Print the names of programming languages that support more than two paradigms.
// var paradigmsMoreThanTwo=programmingLanguages.filter(f=>f.paradigms.length>2).map(f=>f.name)
// console.log(paradigmsMoreThanTwo);


//   Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.
// var oldestPrgm=programmingLanguages.sort((f1,f2)=>f1.yearCreated-f2.yearCreated).find(f=>f.name)
// console.log(oldestPrgm);
