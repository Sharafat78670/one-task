var math=78;
var science=68;
var english=65;
var islam=75;
var ict=55;

var total= math+science+english+islam+ict;
console.log("Total mark is - "+total+" .")

var average = total/5;

if(average >= 80 && math>39 && science>39 && english>39 && islam>39 && ict>39){
    console.log('GPA - "A+"')
}
else if (average >= 70 && math>39 && science>39 && english>39 && islam>39 && ict>39) {
    console.log('GPA - "A"')
}
else if (average >= 60 && math>39 && science>39 && english>39 && islam>39 && ict>39) {
    console.log('GPA - "B"')
}
else if (average >= 50 && math>39 && science>39 && english>39 && islam>39 && ict>39) {
    console.log('GPA - "C"')
}
else if (average >= 40 && math>39 && science>39 && english>39 && islam>39 && ict>39) {
    console.log('GPA - "D"')
}
else  {
    console.log('GPA - "Fail"')
}