var math_mark =75;
var english_mark =82;
var science_mark =77;
var bag_mark =72;
var ict_mark =85;

var total_mark = math_mark+english_mark+science_mark+bag_mark+ict_mark;

var average_mark =total_mark/5;

document.getElementById("Math").innerHTML="Math subject mark is " + math_mark + " ."
document.getElementById("Science").innerHTML="Science subject mark is " + science_mark + " ."
document.getElementById("English").innerHTML="English subject mark is " + english_mark + " ."
document.getElementById("Bangla").innerHTML="Bangla subject mark is " + bag_mark + " ."
document.getElementById("ICT").innerHTML="ICT subject mark is " + ict_mark + " ."
document.getElementById("Total").innerHTML="Total mark is " + total_mark + " ."
document.getElementById("Average").innerHTML="Average mark is " + average_mark + " ."

