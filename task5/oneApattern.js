/*
1  A  A  A 
1  1  A  A
1  1  1  A
1  1  1  1
*/

for(r=1;r<=4;r++){
   var pattern =  "";
    for(c=1;c<=4;c++){
        if(c<=r){
            pattern += "1\t";
        }
        else{
            pattern += "A\t";
        }
    }
    console.log(pattern);
    
}