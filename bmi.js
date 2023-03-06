
// function that converte the weight on Pounds
function weightConverter(valNum) {
    document.getElementById("outputPounds").innerHTML=valNum*2.2046;
console.log("value : "+valNum)

  }
// function that converte the weight on Kilograms

  function convertPoundsToKilograms(pounds) {
document.getElementById("outputKilograms").innerHTML= pounds * 0.453592;
  }

// function that converte the length on Metres 

  function LengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/3.2808;
  }

// function that converte the length on feets 

  function LengthConverter1(valNum) {
    document.getElementById("outputFeet").innerHTML=valNum*3.2808;
  }
  