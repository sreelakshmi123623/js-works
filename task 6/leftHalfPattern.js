/*

               *
            *  *
         *  *  *
      *  *  *  *
   *  *  *  *  *
*  *  *  *  *  *
*/



for(r=1;r<=6;r++){
    var pattern = "";       
    for(c=1;c<=6-r;c++){
        pattern += "  ";

    }
    for(c=1;c<=r;c++){
        pattern += "* ";
    }   
    console.log(pattern);

}