


// const bankDB = {
//     1000: { acno: 1000, password: "userone", balance: 5000 },
//     1002: { acno: 1000, password: "usertwo", balance: 8000 },
// };

// class Bank {

//     validate(acno, password) {
//         if (acno in bankDB) {
//             if (bankDB[acno].password == password) {
//                 console.log("login success");

//             }
//             else {
//                 console.log("incorrect acno or password");

//             }
//         }
//     }

//     deposit(acno, amount) {
//         bankDB[acno].balance += amount
//         console.log(`${acno} has been deposited with amount ${amount}`);

//     }
//     checkBalance(acno) {
//         console.log(`${acno} balance is ${bankDB[acno].balance}`);

//     }
//     withdraw(acno, amount) {
//         if (amount > bankDB[acno].balance) {
//             console.log("insuficient bank balance");

//         }
//         else {
//             bankDB[acno].balance -= amount
//             console.log(`${acno} withdraw amount ${amount}`);

//         }
//     }
//     fundTransfer(fromacno,toacno,amount){
//         if(amount>bankDB[fromacno].balance){
//             console.log("insuficient bank balance");

//         }
//         else{
//             bankDB[fromacno].balance-=amount
//             bankDB[toacno].balance+=amount
//             console.log(`amount of ${amount} is transfered to ${toacno} from ${fromacno}`);

//         }
//     }


// }
// // Validate account number and password
// var instanceOfBank = new Bank()

// instanceOfBank.validate(1000,"userone")


// // Deposit amount
// instanceOfBank.deposit(1000,2000)

// // Check balance
// instanceOfBank.checkBalance(1000)

// // Withdraw amount
// instanceOfBank.withdraw(1000,500)

// // Check balance
// instanceOfBank.checkBalance(1000)

// // Fund transfer between two accounts
// instanceOfBank.fundTransfer(1000,1002,2000)


class BANK {
    db = {
        1000: { "acno": 1000, "suername": "neer", "password": 1000, "balance": 5000, transaction: [] },
        1001: { "acno": 1001, "suername": "neer", "password": 1001, "balance": 5000, transaction: [] },
        1002: { "acno": 1002, "suername": "neer", "password": 1002, "balance": 5000, transaction: [] },

    };


validateAcno(acno){
    return acno in this.db ? true : false;
}

authenticateUser(acno, psw){
    if (this.validateAcno(acno)) {
        if (psw == this.db[acno].password) {

            console.log("successfuly loged in");
        }
        else {
            console.log("incorrect password");

        }



    }
    else {
        console.log("Invalid account number");

    }
}

getBalance(acno){
    return this.validateAcno(acno)?this.db[acno].balance:"invalid account number"
}

fundTransfer(fromacno,toacno,amount){
    if(this.validateAcno(fromacno) && this.validateAcno(toacno)){
        if(this.db[fromacno].balance>amount){
            this.db[fromacno].balance -=amount
            this.db[toacno].balance+=amount
            console.log(`transaction completed fund transfer from ${fromacno} to ${toacno} with amount ${amount}`);
            
        }
        else{
            console.log("insuficient bank balance");
            
        }
    }
    else{
        console.log("invalid account number");
        
    }
}

}


b1=new BANK()

console.log(b1.validateAcno(1000));
console.log(b1.validateAcno(1006));

console.log(b1.authenticateUser(1000,1000));


console.log(b1.getBalance(1002));


console.log(b1.fundTransfer(1001,1002,2000));
