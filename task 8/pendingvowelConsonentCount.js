function vowelConsonents(str){
    var vowelCount= "";
    var count = "";
    for(i=str.length-1;i>=0;i--){
    if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O" || str[i]==="U" ){
        vowelCount= count++;
        return vowelCount;
    } 
    else{
        count++;
        return count;
    }
}
        
    
}
console.log(vowelConsonents("javascript"));
