class Student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    displayStudent(){
        console.log(`${this.name},${this.age}`);
        
    }
}

var  studentInstance=new Student("arya",12)

studentInstance.displayStudent()