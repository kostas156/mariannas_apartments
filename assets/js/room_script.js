let studio_slideIndex = 1;
studio_showSlides(studio_slideIndex);

let big_slideIndex = 1;
big_showSlides(big_slideIndex);

// Next/previous controls
function studio_plusSlides(n) {
  studio_showSlides(studio_slideIndex += n);
}

// Thumbnail image controls
function studio_currentSlide(n) {
  studio_showSlides(studio_slideIndex = n);
}

function studio_showSlides(n) {
  let studio_i;
  let studio_slides = document.getElementsByClassName("studio-mySlides");
  let studio_dots = document.getElementsByClassName("studio-dot");
  if (n > studio_slides.length) {
    studio_slideIndex = 1;
  }
  if (n < 1) {
    studio_slideIndex = studio_slides.length;
  }
  for (studio_i = 0; studio_i < studio_slides.length; studio_i++) {
    studio_slides[studio_i].style.opacity = "0";
    studio_slides[studio_i].style.display = "none";
  }
  for (studio_i = 0; studio_i < studio_dots.length; studio_i++) {
    studio_dots[studio_i].className = studio_dots[studio_i].className.replace(" active", "");
  }
  studio_slides[studio_slideIndex - 1].style.display = "block";
  setTimeout(function() {
    studio_slides[studio_slideIndex - 1].style.opacity = "1";
  }, 100);
  studio_dots[studio_slideIndex - 1].className += " active";
}


function big_plusSlides(n) {
  big_showSlides(big_slideIndex += n);
}

// Thumbnail image controls
function big_currentSlide(n) {
  big_showSlides(big_slideIndex = n);
}

function big_showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("big-mySlides");
  let dots = document.getElementsByClassName("big-dot");
  if (n > slides.length) {
    big_slideIndex = 1;
  }
  if (n < 1) {
    big_slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[big_slideIndex - 1].style.display = "block";
  setTimeout(function() {
    slides[big_slideIndex - 1].style.opacity = "1";
  }, 100);
  dots[big_slideIndex - 1].className += " active";
}