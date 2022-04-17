function doIcon( pVal ) {
    let obj = document.getElementById( 'imgCombo' );
    let img = '/src/icons/' + pVal + '.png';
    obj.style.background = "url( '" + img + "' ) no-repeat";
    
    let option = document.querySelectorAll('option');
    option.style.height = "50px";
}

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("click", function(issrc) {
   if (issrc.target.id =="click_img1") {
       if (blockImg1.style.display == "block") {
            blockImg1.style.display = "none";
       } else {
           blockImg1.style.display = "block";
       }
   }

   if (issrc.target.className =="click_img1") {
       click_img1.src = document.querySelector("#"+issrc.target.id).src;
       blockImg1.style.display = "none";
   }

});