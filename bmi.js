//this function calculates the BMI
function calculate(){
  //to get the value of the height 
  var height=$("#height").val()
  //to get the value of the weight
  var weight=$("#weight").val()
  // the formula of BMI
  var bmi=weight/((height**2)/10000)
      $("div#container").hide(1000)

  //what does the bmi indicate 
          if (bmi < 18.5){
               var rslt=$("<div>Your BMI is "+ bmi.toFixed(1)+" indicating your weight is in the underweight category <div>")
          }
          else if ((bmi>=18.5)&&(bmi<25)){
              var rslt=$("<div>Your BMI is "+ bmi.toFixed(1)+" indicating your weight is in the healthy weight category <div>")
          }
          else if ((bmi>=25)&&(bmi<30)){
              var rslt=$("<div>Your BMI is "+ bmi.toFixed(1)+" indicating your weight is in the overweight category <div>")
          }
          else if (bmi>=30){
              var rslt=$("<div>Your BMI is "+ bmi.toFixed(1)+" indicating your weight is in the obesity category <div>")
          }
      $("p#paragraph").hide(500)
      $("div#result").hide(500)
      $("div#result").append(rslt)
      $("div#result").show(500)
}











  // nour