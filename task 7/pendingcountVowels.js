// write a program to count the vowels in a string "javascript"
var count = 0;

function VowelCount(name) {
    if(name=="a" || name=="e" || name=="i" || name=="o" || name=="u" || name=="A" || name=="E" || name=="I" || name=="O" || name=="U" ){
        return count++;
    }
    else{
        return "NO vowels";
    }
}
console.log(VowelCount(javascript));
