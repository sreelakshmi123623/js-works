//write a function that converts the first letter of the word to upper case

function capitalizing(word){
    return word.charAt(0).toUpperCase()+ word.slice(1);
}
console.log(capitalizing("hello"));
