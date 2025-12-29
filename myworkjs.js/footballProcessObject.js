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


//display the country name whose value  >1

for(let [k,v] of Object.entries(footBall)){
    if(v>1){
        console.log(k,v);
        
    }
}