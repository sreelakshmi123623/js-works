class Student{
    //instance initialization -constructor()-defult method(no need to create new function)
    //first execute this methods user defined methods execute 
    constructor(name,age,language){
        this.name=name
        this.age=age
        this.language=language
    }
    displayStudent(){
        console.log(this.name,this.age ,this.language);
        
    }
}
//after object creation constructor involves automatically
var studentInstance=new Student("arya",12,"english");

studentInstance.displayStudent();

var student2Instance=new Student("anamika",14,"English")

student2Instance.displayStudent()
