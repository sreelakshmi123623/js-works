var movies = [
  {id: 1,title: "Drishyam",director: "Jeethu Joseph",price: 250,genre: "Thriller",language: "Malayalam"},
  {id: 2,title: "Premam",director: "Alphonse Puthren",price: 200,genre: "Romance",language: "Malayalam"},
  {id: 3,title: "Inception",director: "Christopher Nolan",price: 450,genre: "Science Fiction",language: "English"},
  {id: 4,title: "Interstellar",director: "Christopher Nolan",price: 500,genre: "Sci-Fi/Drama",language: "English"},
  {id: 5,title: "Bangalore Days",director: "Anjali Menon",price: 300,genre: "Drama",language: "Malayalam"},
  {id: 6,title: "Lucifer",director: "Prithviraj Sukumaran",price: 350,genre: "Action/Thriller",language: "Malayalam"},
  {id: 7,title: "Charlie",director: "Martin Prakkat",price: 280,genre: "Romance/Drama",language: "Malayalam"},
  {id: 8,title: "Joker",director: "Todd Phillips",price: 420,genre: "Psychological Thriller",language: "English"},
  {id: 9,title: "Avengers: Endgame",director: "Anthony Russo, Joe Russo",price: 550,genre: "Action/Fantasy",language: "English"},
  {id: 10,title: "KGF: Chapter 1",director: "Prashanth Neel",price: 380,genre: "Action",language: "Kannada"},
  {id: 11,title: "Bahubali: The Beginning",director: "S. S. Rajamouli",price: 480,genre: "Epic/Fantasy",language: "Telugu"},
  {id: 12,title: "Forrest Gump",director: "Robert Zemeckis",price: 400,genre: "Drama",language: "English"},
  {id: 13,title: "Titanic",director: "James Cameron",price: 370,genre: "Romance/Drama",language: "English"},
  {id: 14,title: "Uyare",director: "Manu Ashokan",price: 260,genre: "Drama",language: "Malayalam"},
  {id: 15,title: "Minnal Murali",director: "Basil Joseph",price: 320,genre: "Superhero/Fantasy",language: "Malayalam"}
];

//display movies title

var movietitle=movies.map(m=>m.title)
console.log(movietitle);


//movies where language is malayalam

var malayalamMovies=movies.filter(m=>m.language=="Malayalam").map(m=>[m.title,m.language])
console.log(malayalamMovies);

//movies price greater than 300

var greaterThan=movies.filter(m=>m.price>300).map(m=>[m.title,m.price])
console.log(greaterThan);

//title and director of all english movie

var directoAndTitle=movies.filter(m=>m.language=="English").map(m=>[m.director,m.title])
console.log(directoAndTitle);


//total price of movies
var total=movies.reduce((sum,m)=>sum+m.price,0)
console.log(total);


//find average price of all movies
console.log("\nfind average price of all movies");

var average=movies.reduce((sum,m)=>sum+=m.price,0)/movies.length
average=Math.round(average)
console.log(average);


//movie with the highest price

var highestPrice=movies.reduce((m1,m2)=>m1.price>m2.price?m1:m2).price
var highestPriceMovie=movies.filter(m=>m.price==highestPrice)
console.log(highestPriceMovie);


//lowest priced movie

var lowest=movies.reduce((m1,m2)=>m1.price<m2.price?m1:m2).price
var lowestPriced=movies.filter(m=>m.price==lowest)
console.log(lowestPriced);


//all movies directed by Christopher Nolan

var directedBy=movies.filter(m=>m.director=="Christopher Nolan").map(m=>[m.title,m.director])
console.log(directedBy);


//count how many movies are in English

var count = movies.filter(m=>m.language=="English").length
console.log(count);

//movies in malayalam count

var countM=movies.filter(m=>m.language=="Malayalam").length
console.log(countM);


//sort by price in ascending order

var ascendingOrder=movies.sort((m1,m2)=>m1.price-m2.price)
console.log(ascendingOrder);

//sort the movies title by alphabetical order

var alphabetical=movies.sort((m1,m2)=>m1.title.localeCompare(m2.title))
console.log("\nalphabetical oorder =",alphabetical);


//first thriller movie

var thrillerMovie = movies.filter(m=>m.genre.includes("Thriller"))[0]
console.log(thrillerMovie);


//new array only movie title and prices
var newArr=movies.map(m=>[m.title,m.price])
console.log(newArr);

//check if any movie price below 200

var below=movies.filter(m=>m.price<200).map(m=>[m.title,m.price]).length>0
console.log(below);
