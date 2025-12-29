let arr = [12,5,20,8,15,30,7,25,10,18]


let finding=arr.filter(num=>num>=10)
let sum  = finding.reduce((total,num)=>num+total)
console.log(sum);
