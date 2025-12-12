/*
       *
     *  *
    *  *  *
  *  *  *  *
*  *  *  *  *

*/




for(r=1;r<=6;r++){
    var pattern = "";
    for(c=1;c<=6;c++){
        if(c<=6-r){
    pattern += " ";
        }
        else{
            pattern += "* ";
        }
        
    }
    console.log(pattern);
    
}