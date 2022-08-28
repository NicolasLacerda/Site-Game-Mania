let carouselContainer = document.querySelector('.container');

let radio = document.querySelectorAll(".btnSlider");

let slides = document.querySelectorAll(".slide");
let numberOfSlides = slides.length;

let dots = document.querySelectorAll(".dot");
let numberOfDots = dots.length;
let i = 0;

$(document).ready(function(){


//botão next   
$('#next').click(function(){

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    i++;

    if (i > (numberOfSlides - 1)){
        i=0;
    }

    $(radio[i]).prop('checked', true);
    $(dots[i]).addClass('active');

});


//botão voltar
$('#prev').click(function(){

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    i--;

    if (i < 0){
        i=(numberOfSlides - 1);
    }

    $(radio[i]).prop('checked', true);
    $(dots[i]).addClass('active');
});

});

//carroussel automático
let carouselPlay = () => {
    playSlider = setInterval(function(){

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
    
        i++;
    
        if (i > (numberOfSlides - 1)){
            i=0;
        }
    
        $(radio[i]).prop('checked', true);
        $(dots[i]).addClass('active');
    
    },5000);
}
carouselPlay();

carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(playSlider);
});

carouselContainer.addEventListener("mouseleave", () => {
    playSlider = setInterval(function(){

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
    
        i++;
    
        if (i > (numberOfSlides - 1)){
            i=0;
        }
    
        $(radio[i]).prop('checked', true);
        $(dots[i]).addClass('active');
    
    },5000);
});