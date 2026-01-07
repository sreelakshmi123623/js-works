var student={
    name:"arya",
    subject:"cs"
}

Object.freeze(student)//cant add or modify the object after freezing it
student.email="arya@gmail.com"
console.log(student);

//isFrozen or not
console.log(Object.isFrozen(student));
