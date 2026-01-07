const foods = [
  {id: 1, name: "Chicken Biriyani", category: "Main Course", cuisine: "Indian", isVeg: false, price: 180, ingredients: [   { item: "Rice", quantity: "200g" },   { item: "Chicken", quantity: "150g" },   { item: "Spices", quantity: "20g" } ]},
  {id: 2, name: "Veg Biriyani", category: "Main Course", cuisine: "Indian", isVeg: true, price: 150, ingredients: [   { item: "Rice", quantity: "200g" },   { item: "Vegetables", quantity: "150g" },   { item: "Spices", quantity: "20g" } ]},
  {id: 3, name: "Masala Dosa", category: "Breakfast", cuisine: "South Indian", isVeg: true, price: 80, ingredients: [   { item: "Rice Batter", quantity: "150g" },   { item: "Potato", quantity: "100g" } ]},
  {id: 4, name: "Idli", category: "Breakfast", cuisine: "South Indian", isVeg: true, price: 50, ingredients: [   { item: "Rice Batter", quantity: "120g" } ]},
  {id: 5, name: "Vada", category: "Snack", cuisine: "South Indian", isVeg: true, price: 40, ingredients: [ { item: "Urad Dal", quantity: "100g" } ]},
  {id: 6, name: "Paneer Butter Masala",category: "Main Course",cuisine: "North Indian",isVeg: true,price: 170,ingredients: [ { item: "Paneer", quantity: "150g" },{ item: "Butter", quantity: "30g" }]},
  {id: 7,name: "Chicken Curry",category: "Main Course",cuisine: "Indian",isVeg: false,price: 160,ingredients: [{ item: "Chicken", quantity: "150g" }]},
  {id: 8,name: "Fish Curry",category: "Main Course",cuisine: "Kerala",isVeg: false,price: 190,ingredients: [{ item: "Fish", quantity: "150g" } ]},
  {id: 9,name: "Veg Fried Rice",category: "Main Course",cuisine: "Chinese",isVeg: true,price: 120,ingredients: [{ item: "Rice", quantity: "200g" },  { item: "Vegetables", quantity: "100g" }]},
  {id: 10,name: "Chicken Fried Rice",category: "Main Course",cuisine: "Chinese",isVeg: false,price: 150,ingredients: [{ item: "Rice", quantity: "200g" },  { item: "Chicken", quantity: "120g" }]},
  {id: 11, name: "Veg Noodles",category: "Main Course", cuisine: "Chinese", isVeg: true, price: 110, ingredients: [ { item: "Noodles", quantity: "200g" } ]},
  {id: 12,name: "Chicken Noodles", category: "Main Course", cuisine: "Chinese", isVeg: false, price: 140, ingredients: [{ item: "Noodles", quantity: "200g" },{ item: "Chicken", quantity: "120g" } ]},
  {id: 13, name: "Burger", category: "Fast Food", cuisine: "American", isVeg: false, price: 130,ingredients: [{ item: "Bun", quantity: "1 pc" },  { item: "Patty", quantity: "1 pc" }]},
  {id: 14,name: "Veg Burger",category: "Fast Food",cuisine: "American",isVeg: true, price: 110,ingredients: [ { item: "Bun", quantity: "1 pc" },  { item: "Veg Patty", quantity: "1 pc" }]},
  {id: 15, name: "Pizza",category: "Fast Food",cuisine: "Italian",isVeg: true,price: 200,ingredients: [ { item: "Cheese", quantity: "100g" },  { item: "Flour", quantity: "200g" }]},
  {id: 16,name: "Chicken Pizza",category: "Fast Food",cuisine: "Italian",isVeg: false,price: 250,ingredients: [{ item: "Chicken", quantity: "120g" },  { item: "Cheese", quantity: "100g" }]},
  {id: 17,name: "Pasta",category: "Main Course",cuisine: "Italian",isVeg: true,price: 160,ingredients: [{ item: "Pasta", quantity: "200g" }]},
  {id: 18,name: "Chicken Pasta",category: "Main Course",cuisine: "Italian",isVeg: false,price: 190,ingredients: [{ item: "Pasta", quantity: "200g" },  { item: "Chicken", quantity: "120g" }]},
  {id: 19,name: "Samosa",category: "Snack",cuisine: "Indian",isVeg: true,price: 20,ingredients: [{ item: "Potato", quantity: "80g" }]},
  {id: 20,name: "Pani Puri",category: "Snack",cuisine: "Indian",isVeg: true,price: 40,ingredients: [{ item: "Puri", quantity: "6 pcs" }]},
  {id: 21,name: "Falafel",category: "Snack",cuisine: "Middle Eastern",isVeg: true,price: 90,ingredients: [{ item: "Chickpeas", quantity: "100g" }]},
  {id: 22,name: "Shawarma",category: "Fast Food",cuisine: "Arabic",isVeg: false,price: 150,ingredients: [{ item: "Chicken", quantity: "120g" }]},
  {id: 23,name: "Hummus",category: "Dip",cuisine: "Middle Eastern",isVeg: true,price: 80,ingredients: [{ item: "Chickpeas", quantity: "150g" }]},
  {id: 24,name: "Grilled Chicken",category: "Main Course",cuisine: "Continental",isVeg: false, price: 220,ingredients: [{ item: "Chicken", quantity: "200g" }]},
  {id: 25, name: "Salad",category: "Healthy", cuisine: "Global", isVeg: true, price: 90, ingredients: [{ item: "Vegetables", quantity: "150g" } ] },

];
//foods name
// var foodNames=foods.map(f=>f.name)
// console.log(foodNames);

//food name-price

// var  foodName=[]
// for(let f of foods){
//     var names=f.name
//     var price=f.price
//     if(names in foodName){
//         foodName[names]=[price]
//     }
//     else{
//         foodName[names]=price
//     }
// }
// console.log(foodName);

//cuisine in upper case

// var cuisineUpper=foods.map(f=>f.cuisine.toUpperCase())
// console.log(cuisineUpper);

//id and name only

// var idAndname=foods.map(f=>({id:f.id,name:f.name}))
// console.log(idAndname);

//prices of all food
// var pricesOfAllFood=foods.map(f=>[f.name,f.price])
// console.log(pricesOfAllFood);

//all vegiterian food
// var vegiterian = foods.filter(f=>f.isVeg==true).map(f=>f.name)
// console.log(vegiterian);

//main courese category
// var mainCourse=foods.filter(f=>f.category=="Main Course")
// console.log(mainCourse);

//list foods price less than 100
// var priceLessThan=foods.filter(f=>f.price<100).map(f=>f.name)
// console.log(priceLessThan);


//list  foods whoes  cuisine is indian
// var cuisineInd=foods.filter(f=>f.cuisine=="Indian").map(f=>[f.name,f.cuisine])
// console.log(cuisineInd);


//foods ingredient contains chicken

// var ingrediant=foods.filter(f=>f.ingredients.some(ing=>ing.item==="Chicken")).map(f=>f.name)
// console.log(ingrediant);


//total price of all food item

// var total=foods.reduce((sum,f)=>sum+f.price,0)
// console.log(total);


//average price of veg food items
// var vegiterianFoodT=foods.filter(f=>f.isVeg==true)
// var findLeng= vegiterianFoodT.length
// var vegPrice=vegiterianFoodT.reduce((sum,p)=>sum+p.price,0)/findLeng
// console.log(vegPrice);


//create an object that shows ttl number of foods by catagory eg{breakfast:4,snack:6}

// var foodCat={}
// for(let f of foods){
//     var catagory=f.category
//     if(catagory in foodCat){
//         foodCat[catagory]+=1
//     }
//     else{
//         foodCat[catagory]=1
//     }
// }
// console.log(foodCat);


//create an object that shows total price by  cuisine

// var totalPrice={}
// for(let f of foods){
//     var cuisine=f.cuisine
//     var price=f.price
//     if(cuisine in totalPrice){
//         totalPrice[cuisine]+=price
//     }
//     else{
//         totalPrice[cuisine]=price
//     }
// }
// console.log(totalPrice);


//most expensive food item

// var mostExpensive=foods.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(mostExpensive);


//sort all foods by price in ascending order

// var sortingInAscending=foods.sort((f1,f2)=>f1.price-f2.price)
// console.log(sortingInAscending);

//sort all foods by price in descending order
// var priceInDescendingOrder=foods.sort((f1,f2)=>f2.price-f1.price)
// console.log(priceInDescendingOrder);


//sort foods by name alphabetically

// var sortingName=foods.sort((f1,f2)=>f1.name.localeCompare(f2.name))
// console.log(sortingName);


//sort foods by category alphabetically

// var sortingCategory=foods.sort((f1,f2)=>f1.category.localeCompare(f2.category))
// console.log(sortingCategory);


//sort foods by cuisine in reverse alphabetically
var reverseCuisine=foods.sort((f1,f2)=>f2.cuisine.localeCompare(f1.cuisine))
console.log(reverseCuisine);
