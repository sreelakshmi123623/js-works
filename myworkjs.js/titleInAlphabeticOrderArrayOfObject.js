var books = [
  { id: 1,title: "Aadujeevitham (Goat Days)",author: "Benyamin",price: 350,genre: "Contemporary Fiction",language: "Malayalam"},
  {id: 2,title: "Indulekha",author: "O. Chandu Menon",price: 250,genre: "Classic Novel",language: "Malayalam"},
  {id: 3,title: "The God of Small Things",author: "Arundhati Roy",price: 499,genre: "Literary Fiction",language: "English"},
  {id: 4,title: "Khasakkinte Ithihasam",author: "O. V. Vijayan",price: 320,genre: "Magical Realism",language: "Malayalam"},
  {id: 5,title: "Atomic Habits",author: "James Clear",price: 550,genre: "Self-Help",language: "English"},
  {id: 6,title: "Balyakalasakhi",author: "Vaikom Muhammad Basheer",price: 180,genre: "Romance/Tragedy",language: "Malayalam"},
  {id: 7,title: "To Kill a Mockingbird",author: "Harper Lee",price: 399,genre: "Classic Fiction",language: "English"},
  {id: 8,title: "Chemmeen",author: "Thakazhi Sivasankara Pillai",price: 290,genre: "Social Realism",language: "Malayalam"},
  {id: 9,title: "Sapiens: A Brief History of Humankind",author: "Yuval Noah Harari",price: 650,genre: "Non-Fiction/History",language: "English"},
  {id: 10,title: "Manjaveyil Maranangal",author: "Benyamin",price: 420,genre: "Mystery/Thriller",language: "Malayalam"}
];

// //title in alphabetic order
var alphabetic=books.sort((b1,b2)=>b1.title.localeCompare(b2.title))
console.log(alphabetic);


//display languages of books and its count

var languageCount={}
for(let b of books){
    var language=b.language
    if(language in languageCount){
        languageCount[language]+=1
    }
    else{
        languageCount[language]=1
    }
}
console.log(languageCount);


//highest count of language
var highest=Object.entries(languageCount).reduce((b1,b2)=>b1[1]>b2[1]?b1:b2)
console.log(highest);


//lowest  count of language
var lowest = Object.entries(languageCount).reduce((b1,b2)=>b1[1]<b2[1]?b1:b2)
console.log(lowest);
