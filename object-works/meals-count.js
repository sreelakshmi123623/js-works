//counting the foods by name if the food exists its count increase else add that food to object by count 1

var  foodLogs={dosa:1,chapathy:1}//dosa:1,chapathy:1,dosa:2

var food ="dosa"//dosa//chapathy//dosa
if(food in foodLogs){
    foodLogs[food]+=1
}
else{
    foodLogs[food]=1
}
console.log(foodLogs);
