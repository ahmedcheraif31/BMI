function calculateBMI(){
var weight=document.getElementById("weight").value
var height=(document.getElementById("height").value)/100
var BMI=weight/(height*height)
var result=""
  console.log(weight)
  console.log(height)
  if ((!weight) || (!height)){
    alert("Please enter a valid value")
  }
  else {
        if (BMI <= 18.4) {
             result = "Your BMI is " + BMI.toFixed(1) + " which means " + "you are Underweight";
        } 
        else if (BMI >= 18.5 && BMI <= 24.9) {
          result = "Your BMI is " + BMI.toFixed(1) + " which means " + "You are Normal";
        } else if (BMI >= 25 && BMI <= 29.9) {
          result= "Your BMI is " + BMI.toFixed(1) + " which means " + "You are Overweight";
        } else if (BMI >= 30) {
          result= "Your BMI is " + BMI.toFixed(1) + " which means " + "You are Obese";
        }
      }

document.getElementById("result").innerHTML=result
}











  // nour