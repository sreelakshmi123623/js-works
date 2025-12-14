// write a function that reverse a string without using build in reverse

function reverseString(str){//parameter
    let reverse = "";//initialize reverse as empty string
    for(i=str.length-1;i>=0;i--){
        reverse +=str[i];
    }
    return reverse;
}
console.log(reverseString("javascript"));
