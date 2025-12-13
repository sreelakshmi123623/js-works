//          *
//        *   *
//       *     *
//      *  *  *  *





for(r=1;r<=4;r++){
    var pattern ="";
    for(c=1;c<=8;c++){
        if(r+c==5 || c-r==3 ||( r==4 && c%2!=0)){
            pattern += "*"
        }
        else{
            pattern += " ";
        }
    }
    console.log(pattern);
    
}