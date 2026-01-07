class student{

    setStudent(name,depart,age){
        this.name=name
        this.depart=depart
        this.age=age
    }
    displayStudent(){
        console.log(this.name,this.depart,this.age);
        
    }
}
var studentInstance=new student()

studentInstance.setStudent("arya","bca",21)

studentInstance.displayStudent()



//bank
/*

create a class bank with attributes

acno,customer_name,acc_type,balance

createAccount()
deposit(amount)
withdraw(amount)
balEnq()

*/

class bank{
    createAccount(acno,customerName,accType,balance){
        this.acno=acno
        this.customerName=customerName
        this.accType=accType
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount
        console.log(`${this.acno} has been deposited with amount ${amount}`);   
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log("insuficient balance");
            
        }
    else{
        this.balance-amount
        console.log(`${this.acno} is withdrawd with amount ${amount} `);
        
    }
    }
    getBalance(){
        console.log(`${this.acno} balace is ${this.balance}`);
        
    }
}

var bankInstance =new bank()

bankInstance.createAccount(13244,"arya","personal",35000)

bankInstance.deposit(5000)

bankInstance.withdraw(10000)

bankInstance.getBalance()