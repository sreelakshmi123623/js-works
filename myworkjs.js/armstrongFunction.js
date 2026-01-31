



function isArmstring(num){
    var count=0
    var sum=0
    var number=num
    var orgnum=num
    while (num!=0) {
        count++
        num=Math.floor(num/10)
    }
    // console.log(count);
    while(number!=0){
        let digit=number%10
        let exponent=digit**count
        number=Math.floor(number/10)
        sum+=exponent
    }
    console.log(sum);
    if(orgnum==sum){
        console.log("Armstrong number");
        
    }
    else{
        console.log("Not an armstrong number");
        
    }
}
isArmstring(1634)
isArmstring(153)
isArmstring(224)
isArmstring(370)