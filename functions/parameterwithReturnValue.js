//finction with parameter and return value

//syntax:

// function funtionName(parameter){
//     return value;
// }

// console.log(funtionName(argument));




function cube(num){
    return num**3;
}
console.log(cube(5));

console.log(cube(7));



function isodd(num){
    return num%2!=0;
}
console.log(isodd(5)?true:false);
console.log(isodd(6)?true:false);



function nummerChek(num) {
    if (num<0) {
        return "Number is -ve";
    }
    else if(num>0){
        return "Number is +ve";
    }
    else if(num==0){
        return "Number is zero";
    }
}
console.log(nummerChek(5));
console.log(nummerChek(-4));
console.log(nummerChek(0));



function wishing(name1,name2){
    return (`Good Morning ${name1},nice to meet you ${name2}`);
}
console.log(wishing("Arjun","Varun"));
