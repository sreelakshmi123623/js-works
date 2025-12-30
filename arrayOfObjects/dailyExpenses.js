var expenses = [
    //jazeel
  { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
  { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
  { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
  //sarah
  { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
  { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  //rahul
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  //amit
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];


// Q owner summary (total expenses of each owners)

var ownerSummary={}//creating an empty object

 for(let e of expenses){
     var owner=e.owner//owner names in expenses is assigned to owner
     var amount=e.amount//amount in expenses is assigned to amount
     if(owner in ownerSummary){//if the owner is in ownerSummery
         ownerSummary[owner]+=amount//if the owner is present in ownerSummary amounts will be add on
     }
     else{
         ownerSummary[owner]=amount//else place the order in orderSummary with amount
     }
 }
console.log(ownerSummary);




// Q highest transaction 

var costlyTransaction=expenses.reduce((e1,e2)=>e1.amount>e2.amount?e1:e2)
console.log(costlyTransaction);


// Q cash transaction

 var cashTransaction=expenses.filter(t=>t.payment_method=="cash")
 console.log(cashTransaction);

// Q transaction with amount >1000

 var transactionAmount=expenses.filter(t=>t.amount>1000)
 console.log(transactionAmount);


// Q total expenses

var total=expenses.reduce((sum,t)=>t.amount+sum,0)
console.log(total);

// Q most used payment method

var mostlyUsed={}

for(let t of expenses){
    var type=t.payment_method
    if(type in mostlyUsed){
        mostlyUsed[type]+=1
    }
    else{
        mostlyUsed[type]=1
    }
}
console.log(mostlyUsed);

var check=Object.entries(mostlyUsed).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2)
console.log(check);



// Q sarah + food + amount
var sarahs=expenses.filter(t=>t.owner=="sarah" && t.category=="food").reduce((sum,t)=>t.amount+sum,0)//no need of reduce unless sarah eats one food
console.log(sarahs);


// Q priority summary

var prioritySummary={}
for(let t of expenses){
    var priority=t.priority
    var amount=t.amount
    if(priority in prioritySummary){
        prioritySummary[priority]+=amount
    }
    else{
        prioritySummary[priority]=amount
    }
}
console.log(prioritySummary);

//transaction of jazeel

var jazeelT=expenses.filter(t=>t.owner=="jazeel")
console.log(jazeelT);


//highest paid category

var categorySummary ={}

for(let t of expenses){
    var category=t.category
    var amount=t.amount
    if(category in categorySummary){
        categorySummary[category]+=amount
    }
    else{
        categorySummary[category]=amount
    }
}
console.log(categorySummary);

var categorySummaryHighest=Object.entries(categorySummary).sort((t1,t2)=>t2[1]-t1[1])
console.log(categorySummaryHighest);



//payment  methods
var paymentMethod={}
for(let e of expenses){
    var payment=e.payment_method
    if(payment in paymentMethod){
        paymentMethod[payment]+=1
    }
    else{
        paymentMethod[payment]=1
    }
}
console.log(paymentMethod);


//priority summary  owner

var prioritySummary={}
for(let e of expenses){
    var owner=e.owner
     var priority=e.priority
    if(!(owner in prioritySummary)){
        prioritySummary[owner]={ need: 0, want: 0 };
    }
    prioritySummary[owner][priority]++
   
}

console.log(prioritySummary);
