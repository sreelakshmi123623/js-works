//1  0  0  0
//0  1  0  0  
//0  0  1  0
//0  0  0  1
for(let r=1;r<=4;r++){

    var pattern ="";

    for(c=1;c<=4;c++){

        if (c==r) {

            pattern += 1 + "\t";
        }
        else{
            
            pattern += 0 + "\t";
        }
    }
    console.log(pattern);
    
}