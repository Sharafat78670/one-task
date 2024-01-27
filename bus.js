var age = 75 ;
var student = true;
 var rate= 500;

console.log("Age : "+age+ " year.")
console.log("Fixed rate : "+rate+ " Taka.")

if (age <=7 ) {
    console.log("----- Free travel -----")
}
else if(age >=65) {
    discount=rate*25/100;
    payMoney=rate - discount;
    console.log("Your payment : " + payMoney + " Taka.")
} 
else if(student) {
    console.log("Your payment : " + rate*50/100 + " Taka.")
}

else{
    console.log("Your payment : "+ rate +" Taka.")
}