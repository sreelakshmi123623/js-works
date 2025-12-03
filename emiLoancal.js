/*var amount = 100000;
var rate=12;
var months = 12;
interest = (amount*(rate*0.01))/months;
console.log(interest);//monthly interest
total = (amount/months)+interest;
console.log(total);*/



var amount = 200000;
var rate = 10;
var months = 24;
var perc = 1/100;
//console.log(1/100);// interest rate => 1% = 1/100 = 0.01
console.log(perc);

var interestt = (amount*(rate*perc))/months;//(amount*(rate*interestrate))/months
console.log("interest per month",interestt);//833.33 => interest per month
var monthlyinstallment = (amount /months)+interestt;//(amount/months)+interest
console.log("total monthly payment",monthlyinstallment);//tottal monthly payment
var totalamount = (monthlyinstallment * 24);//total amount
console.log("total amount to be paid",totalamount);
console.log(totalamount-amount);// total interest to be paid




