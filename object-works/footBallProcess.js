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


    // for(let item of Object.entries(footBall)){
    //     key=item[0]
    //     value=item[1]   
    //     console.log(key,value);     
    // }
              //instead

    // for(let [k,v] of Object.entries(footBall)){
    //     console.log(k,v);
        
    // }
    
    //display country name whiose values >1


for(let [k,v] of Object.entries(footBall)){
       if(v>1){
        console.log(k,v);
        
       }
        
    }
    

