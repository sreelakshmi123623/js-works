//function inside a function

// function outerFunction(){//2nd
//     function innerFunction(){
//         console.log("inner function");//4th
        
//     }
//     innerFunction()//3rd
// }
// outerFunction()//1st

//outerFunction calls innerFunction



//eg
function outer(num1){
    function innerF(num2){
        return num1+num2
    }
    return innerF
}
console.log(outer(100)(200));



//checking if the login username and password is currect or not

function login(username){
    function checkPassword(password){
        return username=="admin" && password=="admin@123"
    }
    return checkPassword //returns boolean value

}
console.log(login("admin")("admin@123"));



//eg

age=23
//== double equalto compares values not type
console.log(age=="23");//returns true

//=== triple equalto compares values and type
console.log(age==="23");//returns false



//hello vipin goodMornning


function greet(text1){
    function greetings(text2){
        return  `hello ${text1} ${text2}`.toUpperCase()
    }
    return greetings
}
console.log(greet("vipin")("Good Morning"));
