// replacing the empty space with an "-"

function emptySpace(str){
    var result = "";
    for(i=0;i<str.length;i++){
        if(str[i]===" "){
            result+="-";
        }
        else{
            result += str[i];
        }
    }
    return result;
}
console.log(emptySpace("hello world"));
