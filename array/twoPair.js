let arr = [1,2,3,4,5,6]

var target = 8;


// for(let i of arr){      //in this method iteration time is heigh 
//     for(let j of arr){
//         let sum=i+j;
//         if(sum==target){
//             console.log(i,j);
            
//         }
//     }
//     i++
// }


var left = 0
var count =0
var right = arr.length-1;

while(left<right){
    let cursum = arr[left]+arr[right]
    if(cursum==target){
        console.log(`${arr[left]} + ${arr[right]} = target ${target}`);
      break;  
    }
    else if(target<cursum){
        right--
    }
    else if(target>cursum){
        left++
    }
    count++

}
console.log(count);
