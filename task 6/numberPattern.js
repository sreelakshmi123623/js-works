//1
//2  3
//4  5  6
//7  8   9  10

var num = 1;

for(r=1;r<=4;r++){
    
    var pattern = "";
    for(c=1;c<=r;c++){
        pattern += num + " ";
        num++;
    }
    console.log(pattern);
    
}

