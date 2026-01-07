
/*

create a class bank with attributes

acno,customer_name,acc_type,balance

createAccount()
deposit(amount)
withdraw(amount)
balEnq()

*/

class Bank{
    createAccount(acno,customerName,accType,balance){
        this.acno=acno
        this.customerName=customerName
        this.accType=accType
        this.balance=balance
    }
    
    deposit(amount){
        this.balance+=amount
        console.log(`${this.acno} has been credicted with amount ${amount} your available balance is ${this.balance}`);
        
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insuficient bank balance");
            
        }
        else{
            this.balance-=amount
            console.log(`${this.acno} has been debited with amount ${amount} your available  balance is ${this.balance}`);
            
        }
    }
    getBalance(){
        console.log(`your available balance is ${this.balance}`);
        
    }

}
var bankInstance=new Bank()

bankInstance.createAccount(135424,"Anoop","personal",3000)

bankInstance.deposit(10000)

bankInstance.withdraw(3000)

bankInstance.getBalance()
