// console.log(123)
const select1 = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);

const nextBtn = select1('.next');
const preBtn =select1('.prev');
const slides = selectAll('.anime__item');
const dots = selectAll('.dot');

var slideIndex = 1;
var n = 1;

function showSlides(n) {
  var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if (n > slides.length) {n = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active__dot", "");
    }
    dots[n-1].className += " active__dot";

    // console.log(n-1, n,n+1, slides.length)

    slides[n-1].style.display = "inline-block";
    if (n == slides.length){
      slides[n-n].style.display = "inline-block";
      slides[n-n+1].style.display = "inline-block";

    }else{
      slides[n].style.display = "inline-block";
      if(n+1 == slides.length){
        slides[n-n+1].style.display = "inline-block";
      }else{
        slides[n+1].style.display = "inline-block";
      }
    }
}
nextBtn.onclick = function(){
    n++;
    console.log(n);
    if (n > slides.length) {n = 1}
    showSlides(n);
    
}
preBtn.onclick = function(){
  n++;
  console.log(n);
  if (n > slides.length) {n = 1}
  showSlides(n);
  
}

function autoShowSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active__dot", "");
    }
    dots[slideIndex-1].className += " active__dot";

    console.log(slideIndex-1, slideIndex,slideIndex+1, slides.length)

    slides[slideIndex-1].style.display = "inline-block";
    

    if (slideIndex == slides.length){
      slides[slideIndex-slideIndex].style.display = "inline-block";
      slides[slideIndex-slideIndex+1].style.display = "inline-block";

    }else{
      slides[slideIndex].style.display = "inline-block";
      if(slideIndex+1 == slides.length){
        slides[slideIndex-slideIndex+1].style.display = "inline-block";
      }else{
        slides[slideIndex+1].style.display = "inline-block";
      }
    }
    slideIndex++;
    setTimeout(autoShowSlides, 2500); // Change image every 2 seconds
}

showSlides(1);
//automatic slidershow

autoShowSlides();  