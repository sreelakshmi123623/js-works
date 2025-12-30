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

// //display all titles

 var titles=books.map(b=>b.title)
 console.log(titles);

// //all book where language is malayalam
 var languageMalayalam=books.filter(b=>b.language=="Malayalam").map(b=>[b.title,b.language])
 console.log(languageMalayalam);

// //find all book with price greater than 300

 var priceGreaterThan=books.filter(b=>b.price>300).map(b=>[b.title,b.price])
 console.log(priceGreaterThan);

// //display the title and author of all movies

 var authosAndTitle=books.map(b=>[b.title,b.author])
 console.log(authosAndTitle);

// //find total price
 var total=books.reduce((sum,b)=>sum+b.price,0)
 console.log(total)


// //highest prices book


var highestPriced =books.reduce((b1,b2)=>b1.price>b2.price?b1:b2).price
 var highestPricedBook=books.filter(b=>b.price==highestPriced)
 console.log(highestPricedBook)


// //lowest priced book

 var lowest=books.reduce((b1,b2)=>b1.price<b2.price?b1:b2).price
 var lowestPriced=books.filter(b=>b.price==lowest)
 console.log(lowestPriced)
// //count books in english

 var counting =books.filter(b=>b.language=="English").length
 console.log(counting)

// //set the price in ascending order
 var ascendingOrder=books.sort((b1,b2)=>b1.price-b2.price)
 console.log(ascendingOrder);


// //mention all books written by Benyamin
 var writter=books.filter(b=>b.author=="Benyamin").map(m=>[m.title,m.author])
 console.log(writter);


// //title in alphabetic order
books.sort((b1,b2)=>b1.title.localeCompare(b2.title))
console.log(books);


//display languages of books and its count
var languageCount={}

for(let b of books){
  var lang=b.language
  if( lang in languageCount){
      languageCount[lang]+=1
  }
  else{
    languageCount[lang]=1
  }
}
console.log(languageCount);


//highest count of language
var most=Object.entries(languageCount).reduce((l1,l2)=>l1[1]>l2[1]?l1:l2)
console.log(most);


//lowest  count of language
var lowestC=Object.entries(languageCount).reduce((l1,l2)=>l1[1]<l2[1]?l1:l2)
console.log(lowestC);

