var orders ={
    pizza:10,
    burger:20,
    pepsi:25,
    alfham:27,
}

//checking checking if it have newOrderItem if it have update else add newOrderItem


var newOrderItem ="biriyani"
var qty=2

if(newOrderItem in orders){
    orders[newOrderItem]+=qty
}
else{
    orders[newOrderItem]=qty//biriyani doesnt exist so add biriyani with value 2
}
console.log(orders);

