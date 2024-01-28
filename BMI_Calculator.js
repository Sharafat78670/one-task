var weight= 65;
var hight= 1.8;

var BMI = weight / (hight)^2;

if (BMI < 18.5) {
    console.log("You are underweight.")
} 
else if (18.5 <= BMI >= 24.9) {
    console.log("You are normal.") 
} 
else if (25 <= BMI >= 29.9) {
    console.log("You are overweight.") 
} 
else{
    console.log("You are obese.") 
}
