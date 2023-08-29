

// ---------Responsive Section------------


$('.up').hide();
$('.down').click(function(){
	$('.responsive-menu-item').toggleClass('slide-menu')
	$('.up').show()
	$('.down').hide()
})

$('.up').click(function(){
	$('.responsive-menu-item').toggleClass('slide-menu')
	$('.down').show()
	$('.up').hide()
})




$('.click-menu').click(function(){
	$('.responsive-menu-item').toggleClass('slide-menu')
	$('.down').show()
	$('.up').hide()
})




$('.of').hide();
$('.on').click(function(){
	$('.page-dropdown').slideDown()
	$('.of').show()
	$('.on').hide()
});

$('.of').click(function(){
	$('.page-dropdown').slideUp()
	$('.on').show()
	$('.of').hide()
});





$('.about-of').hide();
$('.about-on').click(function(){
	$('.about-dropdown').slideDown()
	$('.about-on').hide()
	$('.about-of').show()
})

$('.about-of').click(function(){
	$('.about-dropdown').slideUp()
	$('.about-of').hide()
	$('.about-on').show()
})







// ----------Slide Section-----------



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

















// --------Top Button-----------


let mybutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






