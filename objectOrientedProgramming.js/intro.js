// programming style
// way of programming
// we can bring real world entities to programming by using classes and objects

//class=>design pattern,plan for creating object(eg:class=laptop)
//object=>real world entity(eg:object=asus,hp,....)



class Student{
   
    setStudent(name,age,depart,fee){//method for initialize attributes
        this.name=name//initializing attributes
        this.age=age
        this.depart=depart
        this.fee=fee
    }
    displayStudent(){
        console.log(this.name,this.age,this.depart,this.fee);
        
    }
    // setName(){
    //     console.log(this.name);
        
    // }

}

var aryaInstance=new Student()

aryaInstance.setStudent("Arya",18,"cs",1000)

aryaInstance.displayStudent()

// var aryaInstance=new Student()
// aryaInstance.setName("Arya")

var nandhuInstance =new Student()

nandhuInstance.setStudent("Nandhu",11,"8th",3000)

nandhuInstance.displayStudent()