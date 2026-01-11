


const bankDB = {
    1000: { acno: 1000, password: "userone", balance: 5000 },
    1002: { acno: 1000, password: "usertwo", balance: 8000 },
};

class Bank {

    validate(acno, password) {
        if (acno in bankDB) {
            if (bankDB[acno].password == password) {
                console.log("login success");

            }
            else {
                console.log("incorrect acno or password");

            }
        }
    }

    deposit(acno, amount) {
        bankDB[acno].balance += amount
        console.log(`${acno} has been deposited with amount ${amount}`);

    }
    checkBalance(acno) {
        console.log(`${acno} balance is ${bankDB[acno].balance}`);

    }
    withdraw(acno, amount) {
        if (amount > bankDB[acno].balance) {
            console.log("insuficient bank balance");

        }
        else {
            bankDB[acno].balance -= amount
            console.log(`${acno} withdraw amount ${amount}`);

        }
    }
    fundTransfer(fromacno,toacno,amount){
        if(amount>bankDB[fromacno].balance){
            console.log("insuficient bank balance");
            
        }
        else{
            bankDB[fromacno].balance-=amount
            bankDB[toacno].balance+=amount
            console.log(`amount of ${amount} is transfered to ${toacno} from ${fromacno}`);
            
        }
    }


}
// Validate account number and password
var instanceOfBank = new Bank()

instanceOfBank.validate(1000,"userone")


// Deposit amount
instanceOfBank.deposit(1000,2000)

// Check balance
instanceOfBank.checkBalance(1000)

// Withdraw amount
instanceOfBank.withdraw(1000,500)

// Check balance
instanceOfBank.checkBalance(1000)

// Fund transfer between two accounts
instanceOfBank.fundTransfer(1000,1002,2000)