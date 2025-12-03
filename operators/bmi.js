//bmi - weight_in_kg / height_in_meters ^2

var weightInKg = 55;

var heightInCm = 167;

var heightInMeter = heightInCm/100;
 
var bmi = weightInKg / heightInMeter ** 2;

console.log(bmi);
