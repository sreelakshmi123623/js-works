// replace all vowels with * in a string

var str = "lets replace vowels with a star";
var result = "";
for(let ch of str){//go throught all characters in the str
    if("aeiouAEIOU".includes(ch)){//in ch if there have any of these:aeiouAEIOU
        result += "*";//there it adds an *
    }
    else{
        result +=ch;
    }
}
console.log(result);
