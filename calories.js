var height = parseInt($("#calc-height").val(),10)
console.log(height)
var age = parseInt($("#calc-age").val(), 10);
console.log(age)

var weight = parseInt($("#calc-weight").val(), 10);
console.log(weight)

var walking = parseInt($("#calc-walking").val(), 10);
console.log(walking)

var cardio = parseInt($("#calc-cardio").val(), 10);
console.log(cardio)
var bmr = parseInt(10 * weight + 6.25 * height - 5 * age, 10)
console.log(bmr)
document.getElementById("bmr").innerHTML=bmr

