var courses = [
  { id: 1, title: "HTML Basics", instructor: "John Doe", price: 999, category: "Web Development", duration: "10 ", level: "Beginner" },
  { id: 2, title: "CSS Mastery", instructor: "Jane Smith", price: 1299, category: "Web Development", duration: "12", level: "Beginner" },
  { id: 3, title: "JavaScript Fundamentals", instructor: "Alex Brown", price: 1799, category: "Web Development", duration: "20", level: "Beginner" },
  { id: 4, title: "Advanced JavaScript", instructor: "Alex Brown", price: 2499, category: "Web Development", duration: "25", level: "Advanced" },
  { id: 5, title: "React JS", instructor: "Emily White", price: 2999, category: "Frontend", duration: "30", level: "Intermediate" },
  { id: 6, title: "Node.js", instructor: "Michael Green", price: 2799, category: "Backend", duration: "28", level: "Intermediate" },
  { id: 7, title: "Express.js", instructor: "Michael Green", price: 1999, category: "Backend", duration: "18", level: "Intermediate" },
  { id: 8, title: "MongoDB Basics", instructor: "Sarah Lee", price: 1599, category: "Database", duration: "15", level: "Beginner" },
  { id: 9, title: "MySQL Complete Guide", instructor: "David Clark", price: 1899, category: "Database", duration: "22", level: "Beginner" },
  { id: 10, title: "Python for Beginners", instructor: "Rachel Adams", price: 1699, category: "Programming", duration: "20", level: "Beginner" },
  { id: 11, title: "Data Structures in Python", instructor: "Rachel Adams", price: 2299, category: "Programming", duration: "25", level: "Intermediate" },
  { id: 12, title: "Java Basics", instructor: "Robert King", price: 1899, category: "Programming", duration: "24", level: "Beginner" },
  { id: 13, title: "Spring Boot", instructor: "Robert King", price: 2999, category: "Backend", duration: "32", level: "Advanced" },
  { id: 14, title: "C Programming", instructor: "Linda Scott", price: 1399, category: "Programming", duration: "18", level: "Beginner" },
  { id: 15, title: "C++ Fundamentals", instructor: "Linda Scott", price: 1599, category: "Programming", duration: "20", level: "Beginner" },
  { id: 16, title: "Machine Learning", instructor: "Andrew Miller", price: 3999, category: "AI", duration: "40", level: "Advanced" },
  { id: 17, title: "Deep Learning", instructor: "Andrew Miller", price: 4599, category: "AI", duration: "45", level: "Advanced" },
  { id: 18, title: "UI/UX Design", instructor: "Sophia Wilson", price: 2499, category: "Design", duration: "26", level: "Intermediate" },
  { id: 19, title: "Figma Essentials", instructor: "Sophia Wilson", price: 1799, category: "Design", duration: "16", level: "Beginner" },
  { id: 20, title: "Cyber Security Basics", instructor: "Daniel Perez", price: 2199, category: "Security", duration: "22", level: "Beginner" },
  { id: 21, title: "Ethical Hacking", instructor: "Daniel Perez", price: 3499, category: "Security", duration: "35", level: "Advanced" },
  { id: 22, title: "Cloud Computing", instructor: "Emma Turner", price: 2899, category: "Cloud", duration: "28", level: "Intermediate" },
  { id: 23, title: "AWS Fundamentals", instructor: "Emma Turner", price: 3199, category: "Cloud", duration: "30", level: "Intermediate" },
  { id: 24, title: "DevOps Basics", instructor: "Oliver Brown", price: 2699, category: "DevOps", duration: "26", level: "Intermediate" },
  { id: 25, title: "Docker & Kubernetes", instructor: "Oliver Brown", price: 3799, category: "DevOps", duration: "34", level: "Advanced" }
];

//1. Create a new array containing only course titles.
var courseTitle=courses.map(c=>c.title)
console.log("new array containing only course titles",courseTitle);

// 2. Find all courses taught by "Alex Brown".
var coursesBy=courses.filter(c=>c.instructor=="Alex Brown").map(c=>[c.title,c.instructor])
console.log("all courses taught by Alex Brown",coursesBy);


// 3. Find all courses whose duration is more than 25 hrs.
var durationGreaterThan=courses.filter(c=>c.duration>25).map(c=>[c.title,c.duration])
console.log("all courses whose duration is more than 25 hrs",durationGreaterThan);


// 4. Create a new array with title and duration only.
var  titleAndDuration = courses.map(c=>[c.title,c.duration])
console.log("new array with title and duration only",titleAndDuration);


// 5. Find all courses where the level is "Beginner".
var levelBeginner=courses.filter(c=>c.level=="Beginner")
console.log("\n\nall courses where the level is Beginner",levelBeginner);


// 6. Sort the courses by duration (ascending order).
var sortByDuration = courses.sort((c1,c2)=>c1.duration-c2.duration)
console.log("Sort the courses by duration",sortByDuration);


// 7. Sort the courses by level (Beginner → Intermediate → Advanced).



// 8. Find all courses in the "Backend" category.
var backendCategory = courses.filter(c=>c.category=="Backend").map(c=>[c.title,c.category])
console.log("all courses in the Backend category",backendCategory);


// 9. Find the average price of all courses.

// var sum =0
// var count=0
// var  average=0
// for(let c of courses){
//   count++
//   var price=c.price
//   sum +=price
//   average=sum/count
// }
// console.log(sum);
// console.log(count);
//console.log(average);

// 9. Find the average price of all courses.

var totalPrice=courses.reduce((sum,c)=>c.price+sum,0)
var average=totalPrice/courses.length
console.log("Find the average price of all courses :",average);



// 10. Count how many courses belong to each level.

var counting ={}
for(let c of courses){
  var level=c.level
  if(level in counting){
    counting[level]+=1
  }
  else{
    counting[level]=1
  }
}
console.log(counting);


// 11. Find the most expensive course price.
var expensiveCoursePrice=courses.reduce((c1,c2)=>c1.price>c2.price?c1:c2)
console.log(expensiveCoursePrice);


// 12. Create a new array with title and price of each course.
var titleAndPrice=courses.map(c=>[c.title,c.price])
console.log(titleAndPrice);




// 13. Find the total number of courses in each category.
var coursesInEachCategory={}
for(let c of courses){
  var category=c.category
  if(category in coursesInEachCategory){
    coursesInEachCategory[category]+=1
  }
  else{
    coursesInEachCategory[category]=1
  }
}
console.log(coursesInEachCategory);


// 14. Sort the courses by price (low to high).
var sortingByPrice=courses.sort((c1,c2)=>c1.price-c2.price).map(c=>[c.title,c.price])
console.log(sortingByPrice);


// 15. Find the total price of all courses.
var totalOfAllCourses=courses.reduce((sum,c)=>sum+c.price,0)
console.log(totalOfAllCourses);


// 16. Sort the courses by price (high to low).
var coursePriceHighToLow=courses.sort((c1,c2)=>c2.price-c1.price).map(c=>[c.title,c.price])
console.log(coursePriceHighToLow);


// 17. Create a new array showing title and instructor name.
var titleAndInstructor=courses.map(c=>[c.title,c.instructor])
console.log(titleAndInstructor);


// 18. Find all courses with price greater than 2500.
var coursePriceGreater=courses.filter(c=>c.price>2500).map(c=>[c.title,c.price])
console.log("\n\nprice greater than 2500",coursePriceGreater);

// 19. Create a new array of course titles in uppercase.
for(let c of courses){
   c.title=c.title.toUpperCase()
}
console.log(courses);

// 20. Sort the courses by title (alphabetical order).

var sortByAlphabeticalOrd=courses.sort((c1,c2)=>c1.title.localeCompare(c2.title))
console.log("\n\nSort the courses by title alphabetical order",sortByAlphabeticalOrd);
