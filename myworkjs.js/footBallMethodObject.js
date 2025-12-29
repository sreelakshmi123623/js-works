footBall={
    brazil:5,
    portugal:1,
    england:4,
    argentina:3,
    urugay:2,
    spain:1,
    italy:4,
    france:2
}
//in
console.log(footBall);

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
for(let key of  Object.keys(footBall)){
    console.log(key);
    
}


for(let value of Object.values(footBall)){
    console.log(value);
    
}

for(let item of Object.entries(footBall)){
    console.log(item);
    
}