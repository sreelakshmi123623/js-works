class Employee{
    setEmployee(name,id,depart,salary){
        this.name=name
        this.id=id
        this.depart=depart
        this.salary=salary
    }
    displayEmp(){
        console.log(`${this.name} with id number ${this.id} in ${this.depart} department,fixed salary ${this.salary}`);
        
    }
}

var empInstance=new Employee()

empInstance.setEmployee("arya",54,"marketing",23000)

empInstance.displayEmp()


var emp2Instance =new Employee()

emp2Instance.setEmployee("arjun",32,"sales",15000)

emp2Instance.displayEmp()