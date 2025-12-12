/*
A  A  A  A
B  B  B  B
C  C  C  C
D  D  D  D
*/
for(r=1;r<=4;r++){
    var pattern = "";
    for(c=1;c<=4;c++){
        if(r==1){
            pattern += "A\t";
        }
        else if(r==2){
            pattern += "B\t";
        }
        else if(r==3){
            pattern += "C\t";
        }
        else{
            pattern += "D\t";
        }
    }
    console.log(pattern);
    
}