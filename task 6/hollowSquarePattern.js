/*
*  *  *  *  *
*           *
*           *
*           *
*  *  *  *  *
 */


for(r=1;r<=5;r++){
    var pattern = "";
    for(c=1;c<=5;c++){
        if(r==1 || r==5 || c==1 || c==5){
            pattern += "*\t";
        }
        else {
            pattern += "    ";
        }
    }
    console.log(pattern);
    
}