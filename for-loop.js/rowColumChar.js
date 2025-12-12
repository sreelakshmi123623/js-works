//O  E  O  E
//O  E  O  E
//O  E  O  E


for(r=1;r<=3;r++){
    var pattern = "";
    
    for(c=1;c<=4;c++){
       if(c==2 || c==4){
        pattern +="E\t"
       }
       else{
        pattern +="O\t"
       }

       //or
       //if(c%2==0){
        //pattern +="E\t"
       //}
       //else{
        //pattern +="O\t"
       //}
    }
    console.log(pattern);
    
}
