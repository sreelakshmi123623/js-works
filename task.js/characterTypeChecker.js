//check if input is a letter ,number or special charatter


 var input = "500";

 if (input>="a" && input<="z" || input>="A" && input<="Z") {
    console.log(`${input} is a letter`);
    
 }
  else if(input>=0 && input<=1001) {
        console.log(`${input} is a number`);
        
    }
    else{
        console.log(`${input} is a special character`);
        
    }
