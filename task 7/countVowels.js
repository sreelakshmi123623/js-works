// write a program to count the vowels in a string "javascript"


function VowelCount(str) {
    var count = 0;
    for(i=0;i<=str.length;i++)
    if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O" || str[i]==="U" ){
         count++;
    }
   return count;
}
console.log(VowelCount("Javascript"));
