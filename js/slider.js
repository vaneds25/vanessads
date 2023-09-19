// JavaScript Document

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {

  let slides    = document.querySelectorAll(".mySlides");
  let slidesArr = Array.from(slides);
  let images    = document.querySelectorAll(".demo");
  let imgArr    = Array.from(images);
  let dots      = document.querySelectorAll(".dot");
  let dotArr    = Array.from(dots);

  let captionText = document.getElementById("caption");
  if (n > slidesArr.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slidesArr.length;
  }

  slidesArr.map(el => el.style.display = "none");
  imgArr.map(el =>  el.className = el.className.replace(" active", ""));
  dotArr.map(el =>  el.className = el.className.replace(" active_dot", ""));

  slidesArr[slideIndex - 1].style.display = "block";
  imgArr[slideIndex - 1].className += " active";
  dotArr[slideIndex - 1].className += " active_dot";
  captionText.innerHTML = imgArr[slideIndex - 1].alt;

}

