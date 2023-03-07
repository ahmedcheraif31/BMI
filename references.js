var arr=[{ body:'weak',advice:"you should more  practice sport"},
           {body:'weak',advice:"you should eat a healthy food "},
           {body:'weak',advice:"eat 3 times in days "},
           {body:'weak',advice:" eat more 2 times in days "},

           {body:'middle',advice:"you did weel "},
           {body:'middle',advice:"practice sport "},
           {body:'middle',advice:"take care for your food  "},
            {body:'middle',advice:"go to rbk"},
            {body:'middle',advice:"have a nice day"},

          {body:'obesity' ,advice:"you should walk 3 hours in day"},          
          {body:'obesity' ,advice:"you should practice sport"},
          {body:'obesity' ,advice:"you should do cardio "},
          {body:'obesity' ,advice:"you should get more effort to be at a  good body"},

        ]

var randomNumber =0 // variable to stor the random number
function getRandomadvice () {
    randomNumber = Math.floor(Math.random() * (arr.length))

	return $('p').append("<h3 class='a'>"+ arr[randomNumber].advice+"</h3>")

}

function getalladvice(){

    for(var i=0;i<arr.length;i++){
        console.log(arr[i].advice)
    
    }
}