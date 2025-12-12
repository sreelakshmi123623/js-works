/*
A  B  C  D
A  B  C  D 
A  B  C  D
A  B  C  D
*/

for(r=1;r<=4;r++){
    var pattern = "";
    for(c=1;c<=4;c++){
        if(c==1){
            pattern += "A\t";
        }
        else if(c==2){
            pattern += "B\t";
        }
        else if(c==3){
            pattern += "C\t";
        }
        else{
            pattern += "D\t";
        }
    }
    console.log(pattern);
    
}