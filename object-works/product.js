//creatye an objects product with attributes
// code,title,price,color

var product={
    code:"RES3465",
    title:"home-applicance",
    price:3400,
    color:"white"

}

console.log(product.title);
//or
console.log(product["title"]);

//adding
product.weight="80kg"
console.log(product);

//check attribute is exists or not

//attributName in object => true or false

if("offer" in product){
    console.log("Exists");
    
}
else{
    console.log("Not exists");
    
}


//update

product.price+=1000
console.log(product);


//add new property quantity as 10 if quantity not exist else update quantity as current quantity

if("quantity" in product){
   product.quantity+=10//updating
    
}
else{
    product.quantity=20//else adding
    
}

console.log(product);
