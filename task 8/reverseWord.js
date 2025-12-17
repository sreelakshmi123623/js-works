//write a program to reverse each word in a string



function reverse(str){
    return str.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
    
}
console.log(reverse("javascript reversing string"));
