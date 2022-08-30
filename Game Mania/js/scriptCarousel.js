const carouselContainer = document.querySelector('.slide-container');
const buttonsContainer = document.querySelector('.carouselButtons');
const dotsContainer = document.querySelector('.carouselDots');

const radio = document.querySelectorAll(".btnSlider");

const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;

const dots = document.querySelectorAll(".dot");
const numberOfDots = dots.length;
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

carouselContainer.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

buttonsContainer.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

dotsContainer.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});


carouselContainer.addEventListener("mouseout", () => {
    carouselPlay();
});

buttonsContainer.addEventListener("mouseout", () => {
    carouselPlay();
});

dotsContainer.addEventListener("mouseout", () => {
    carouselPlay();
});