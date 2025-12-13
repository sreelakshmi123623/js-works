//   *  *  *  *  *
//     *       *
//       *   *
//         *

for(r=4;r>=1;r--){
    var pattern ="";
    for(space=1;space<=4-r;sapce++){
        pattern += " ";
    }
    for(c=1;c<=2*r-1;c++){
        if(r==4 || c==1 || c==2*r-1 ){
            pattern += "*";
        }
        else{
            pattern += " ";
        }
    }
    console.log(pattern);
    
}