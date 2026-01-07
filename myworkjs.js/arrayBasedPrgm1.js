var arr= [-1,0,-1,0,0,-1,0,0,-1]

//output = [-1,-1,-1,-1,0,0,0,0,0]

    let result=[]

for(let n of arr){

    if(n<0){
        result.unshift(n)
    }
    else{
        result.push(n)
    }
}
console.log(result);
