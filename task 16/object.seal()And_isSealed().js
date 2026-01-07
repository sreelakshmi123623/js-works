var student={
    name:"arya",
    subject:"cs"
}

Object.seal(student)//prevent adding new properties

student.email="arya@gmail.com"
console.log(student);


//check if student object is sealed

console.log(Object.isSealed(student));//true
