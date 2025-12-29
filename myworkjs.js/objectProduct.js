//creatye an objects product with attributes
// code,title,price,color


var product={
    code:"YTE4667",
    title:"TV",
    price:65000,
    color:"black"

}

console.log(product.title);
//or
console.log(product["title"]);



//adding new propertu value to the student object

product.weight="80kg"
product["pass-out-year"]=2025

console.log(product);

//check attribute is exists or not

//"attributName" in object => true or false

if("offer" in product){
    console.log("Exists");
    
}
else{
    console.log("Not exists");
    
}


//update

product.price+=2000
console.log(product);



//add new property quantity as 10 if quantity not exist else update quantity as current quantity
if("quantity" in product){
    product.quantity+=10
}
else{
    product.quantity=20
}
console.log(product);


