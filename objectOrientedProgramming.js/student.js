class Student{
    setStudent(name,division,language,age){
        this.name=name
        this.division=division
        this.language=language
        this.age=age
    }
    displayStudent(){
        console.log(`${this.name} in class ${this.division},selected language is ${this.language} and his/her age is ${this.age}`);
        
    }
}
//object 1 object name=student1Instance
var student1Instance=new Student()

student1Instance.setStudent("arya","8th","malayalam",16)

student1Instance.displayStudent()

//object 2 object name=student2Instance
var student2Instance=new Student()

student2Instance.setStudent("anamika","8th","english",16)

student2Instance.displayStudent()