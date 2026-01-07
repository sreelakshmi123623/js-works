var obj1={name:"arya",age:23}
var obj2={name:"arya",age:23}

var isEqual=JSON.stringify(obj1)===JSON.stringify(obj2)//json.stringify converts an object to string
console.log(isEqual);
