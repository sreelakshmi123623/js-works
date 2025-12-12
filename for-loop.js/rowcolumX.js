//1  0  0  1
//0  1  1  0
//0  1  1  0
//1  0  0  1


for(r=1;r<=4;r++){
    var pattern = "";
    for(c=1;c<=4;c++){
        if (c==r || c+r==5) {
            pattern += "1\t"; 
        }
        // else if (c+r==5) {
        //      pattern += "1\t"; 
        // }
        else{
            pattern += "0\t";
        }
        
    }
            console.log(pattern);

}