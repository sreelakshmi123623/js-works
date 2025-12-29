var colors =["red","blue","green","white","black","yellow","pink","purple","orange","blue"];

//create an object colorCount to count the colors in the array

var colorCount={}

for(let c of colors){
    if(c in colorCount){
        colorCount[c]+=1
    }
    else{
        colorCount[c]=1
    }
}
console.log( colorCount);
