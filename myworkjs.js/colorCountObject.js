
var colors =["red","blue","green","white","black","yellow","pink","purple","orange","blue"];

var countColor={}

for(let c of colors){
    if(c in countColor){
        countColor[c]+=1
    }
    else{
        countColor[c]=1
    }
}
console.log(countColor);
