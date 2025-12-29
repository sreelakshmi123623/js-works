var orders ={
    pizza:10,
    burger:20,
    pepsi:25,
    alfham:27,
}

//checking checking if it have newOrderItem if it have update else add newOrderItem


var newOrderItem="burger"
var qty = 2

if(newOrderItem in orders){
    orders[newOrderItem]+=qty;//burger exists so uppdate it by adding 2
}
else{
    orders[newOrderItem]=qty
}
console.log(orders);
