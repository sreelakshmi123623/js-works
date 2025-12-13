//*  *  *  *  *  *
//   *  *  *  *  *
//      *  *  *  *
//         *  *  *
//            *  *
//               *

for(r=6;r>=1;r--){
    var pattern="";
    for(space=1;space<=6-r;space++){
        pattern +=" ";
    }
    for(c=1;c<=r;c++){
        pattern +="*";
    }
    console.log(pattern);
    
}