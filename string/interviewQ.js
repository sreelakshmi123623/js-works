// word = "ABCD123";

// challengeCode ="7YZ";

//append challenge code with word

// A B C D 1 2 3

let word = "ABC123";

let challengeCode = "7YZ";

let newWord = word.concat(challengeCode);
console.log(newWord);

//1 2 3 1 2 3 1 2 3  => count logic
//A B X 1 2 X 7 Y X
//0 1 2 3 4 5 6 7 8


let masked = "";
let count = 1;
for(i=0;i<newWord.length;i++){
    if((i+1)%3==0){
        masked += "X";
        
    }
    else{
        masked +=newWord[i];
    }

}
console.log(masked);

