//1  0  0  0  1
//0  1  0  1  0
//0  0  1  0  0
//0  1  0  1  0
//1  0  0  0  1


for(r=1;r<=5;r++){
    var pattern = "";
    for(c=1;c<=5;c++){
        if(r==c || c+r==6){
            pattern += "1\t";

    }
    else{
        pattern += "0\t";
    }
}
console.log(pattern);

}
