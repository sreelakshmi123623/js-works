var footBall={
    brazil:5,
    portugal:1,
    england:4,
    argentina:3,
    urugay:2,
    spain:1,
    italy:4,
    france:2
}


console.log(footBall);//return in object

var check=Object.keys(footBall)//properties will return in array
console.log(check);


//in
for(let key in footBall){
    console.log(key);
}
for(let value in footBall){
    console.log(footBall[value]);
    
}
for(let key in footBall){
    console.log(key,footBall[key]);
    
}


//of
for(let key of Object.keys(footBall)){//property as string
    console.log(key);
    
}

for(let val of Object.values(footBall)){
    console.log(val);
    
}

for(let items of Object.entries(footBall)){
    console.log(items);
    
}