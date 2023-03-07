
// to control next and prev
function plusSlide(n) {
    showSlide(slideIndex += n);
  }
  
  // this function takes an index as a parameter and displays the slide  
  function showSlide(n) {
   
    var slides = document.getElementsByClassName("mySlides");
    // when the n of slides finih it returns to the first slide
          if (n > slides.length) {
               slideIndex = 1
           }
          if (n < 1) {
              slideIndex = slides.length
              }
      // loop over the slides to display the indexed slide 
    for ( var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      }
   
    slides[slideIndex-1].style.display = "block";
  
  }
  
  var slideIndex = 1;
  showSlide(slideIndex);