//counting the foods by name if the food exists its count increase else add that food to object by count 1
var foodLogs={dosa:1,chapathy:1}//dosa:1,chapathy:1,dosa:2

var foods="dosa"//dosa//chapathy//dosa
if(foods in foodLogs){
    foodLogs[foods]+=1
}
else{
    foodLogs[foods]=1
}
console.log(foodLogs);
