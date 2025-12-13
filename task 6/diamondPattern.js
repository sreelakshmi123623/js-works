//         *
//       *   *
//      *  *  *
//     *  *  *  *
//      *  *  *
//       *   *
//         *

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
for(r=5;r>=1;r--){
    var pattern="";
    for(space=1;space<=5-r;space++){
        pattern +=" ";
    }
    for(c=1;c<=r;c++){
        pattern +=" *";
    }
    console.log(pattern);
    
}