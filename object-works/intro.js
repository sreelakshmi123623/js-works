//its a programming approach
//object oriented programming =>realworld entity
//by using the key concepts - class and object
//class=>plan(pre-defined)
//object=>realworld entity(can creating object by uisng plan(class) OR can directly create object)

// var objectName={
//     attribute|property:value,
//     attribute|property:value,
//     attribute|property:value,
//     method1(){}
//     method2(){}
// }

//property should be unique

var employee={
    name:"arya",
    age:21,
    height:165

}
console.log(employee.name);
console.log(employee.age);


//create an object student with properties
//rol,name,course,email,gender

var student={
    name:"anamika",
    rol:26,
    course:"mearn",
    email:"anamika@gmail.com",
    gender:"female"
}
console.log(student.course);
console.log(student.name);
//or can use this method
console.log(student["email"]);
console.log(student["gender"]);



//adding a new property value to existing object

student.college="cms"

console.log(student);

student["pass_out_year"]=2025

console.log(student);
