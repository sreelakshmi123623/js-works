// let arr = {
//     length,
//     push(value) - can add a value in the end
//     pop() - delete or remove a value from ending(removes the last  element in an array)
//     unshift() -insert new element in the start of an array
//     shift() - remove the first element from an array
//     indexOf() -gets the index number of the element we input,if the element doesnt exists it returns -1
//     lastIndexOf(value)-Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
//     includes(value)-can check if the value is in the array or not,return true or false(Determines whether an array includes a certain element, returning true or false as appropriate.)
     
       //extracting a portion
//     slice(start index,end index)-Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.(doesnt modify original array)
//     splice(start of index number,delete count of object)//index number of start deleting ,count of objects that need to delete (do modify original array)



//advanced array methods
//map()//for apply functionality in all objects in an array
//filter()//for take a  particular object//only return if the cindition is true //Returns the elements of an array that meet the condition specified in a callback function.
//reduce()//single value as output(processing the array and taking a single value)//with two parameters
//sort()
//some()
//forEach()
//find()



// }


let foods=["dosa","chapathy","salt-mango-tree","rice","water"];


// foods.push("fried-rice");
// console.log(foods);


// foods.pop();
// console.log(foods);

// foods.unshift("tea")//add in the bigning
// console.log(foods);


// foods.shift();//removes from the bigning
// console.log(foods);

// var food =(foods.length);
// console.log(food);


// let check=foods.indexOf("salt-mango-tree")
// console.log(check);

// let checks=foods.lastIndexOf("salt-mango-tree");
// console.log(checks);

// let exists = foods.includes("dosa")//Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(exists);


// let portion = foods.slice(0,3)//for extract a portion
// console.log(portion);


//foods.splice(1,1);//index number of start deleting ,count of objects that need to delete 
//console.log(foods);


//console.log(foods);

//foods.splice(1,1,"coffee")//index number of start deleting ,delete count of object ,"we can add an object in the space that we deleted"
//console.log(foods);
