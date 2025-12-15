function vowelConsonents(str){
    let vowels= 0;
    var consonents= 0;
     str=str.toLowerCase();
for(let i=0;i<str.length;i++){
        let ch=str[i];
        if("aeiou".includes(ch)){
            vowels++;
    }     
    else if(ch>="a" && ch<="z"){
        consonents++;
    }
}

return {vowels, consonents};
}
let result = vowelConsonents("Hello World!");

console.log(`count of vowels: ${result.vowels} \ncount of consonents: ${result.consonents}`);


