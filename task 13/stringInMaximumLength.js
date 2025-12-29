let arr = ["red","yellow","brown","black"]

let max="";

for(let ch of arr){
    if(ch.length >max.length){
        max=ch
    }
}
console.log(max);
