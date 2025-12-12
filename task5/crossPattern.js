/*
0  0  1  0  0
0  0  1  0  0
1  1  1  1  1
0  0  1  0  0
0  0  1  0  0
*/

for(r=1;r<=5;r++){
    var pattern = "";
    for(c=1;c<=5;c++){
      if(c==3 || r==3){
        pattern += "1\t";
      }
      else{
        pattern += "0\t";
      }

    }
    console.log(pattern);
    
}