

function calculateCaluries(){
    var height=$("#height").val()
    var weight=$("#weight").val()
    var age =$("#age").val()
    var walking =$("#walking").val()
    var cardio =$("#cardio").val()
   
console.log(height)
console.log(weight)
console.log(age)
console.log(walking)
console.log(cardio)

var m=$("#gender-male").val()
var f=$("#gender-female").val()


//     For men:
// BMR = 13.397W + 4.799H - 5.677A + 88.362
// For women:
// BMR = 9.247W + 3.098H - 4.330A + 447.593

var bmrmen=(13.397*weight + 4.799*height - 5.677*age + 88.362)+walking*1.23+cardio*1.02 
var bmrwomen=(9.247*weight + 3.098*height - 4.330*age + 447.59)+walking*1.02+cardio*1.02


console.log($("input[type='radio']").val())

if ($("input[type='radio']").val()=="Male"){
if (bmrmen < 1700 ){
    var rslt="Your  is "+ bmrmen+"  you should eat more" 
}
else if ((bmrmen>=2150)&&(bmrmen<2500)){
   var rslt="Your  is "+ bmrmen+"you should have good lunch"
}
else if ((bmrmen>=2500)&&(bmrmen<3000)){
   var rslt="Your  is "+ bmrmen+"you should  "
}
else if (bmrmen>=3000){
   var rslt="Your  is "+ bmrmen+" calories "
}

}
else if ($("#gender-female").val()=="female" ){
    console.log($("#gender-female").val())
    if (bmrwomen < 1700){
        var rslt="Your number of calories is "+ bmrwomen+"  you should eat more" 
    }
    else if ((bmrwomen>=2150)&&(bmrwomen<2500)){
       var rslt="Your number of calories is "+ bmrwomen+"you should have good lunch"
    }
    else if ((bmrwomen>=2500)&&(bmrwomen<3000)){
       var rslt="Your number of calories is "+ bmrwomen+"you should  "
    }
    else if (bmrwomen>=3000){
       var rslt="Your number of calories  is "+ bmrwomen+" calories "
    }

}


 
document.getElementById("result").innerHTML=rslt


}

