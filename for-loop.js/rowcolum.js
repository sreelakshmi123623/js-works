
// //   c1 c2 c3 c4
// //r1  *  *  *  *
// //r2  *  *  *  *
// //r3  *  *  *  *
// //r4  *  *  *  *



// for(r=1;r<=4;r++){
//     var pattern = "";
//     for(c=1;c<=4;c++){
//         pattern+="*\t";
//     }
//     console.log(pattern); 
// }

// * * * *
// * * *
// * *
// *
for(r=4;r>=1;r--){
    let pattern =""
    for(c=1;c<=r;c++){
        pattern+="*"
    }
    console.log(pattern);
    
}

// 1
// 12
// 123
// 1234

for(let r=1;r<=4;r++){
    let pattern=""
    for(c=1;c<=r;c++){
        pattern+=c+" "
    }
    console.log(pattern);
    
}

// 1
// 23
// 456

let num=1
for(let r=1;r<=3;r++){
    let pattern=""
    for(c=1;c<=r;c++){
        pattern+=num +"\t";
        num++
    }
    console.log(pattern);
    
}

