let sliderItems = Array.from(document.querySelectorAll(".slider__item"));
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");

let currentSlide = 0;

function changeSlide (slide) {
	sliderItems[currentSlide].classList.remove("slider__item_active");
	currentSlide = (slide + sliderItems.length) % sliderItems.length;
	sliderItems[currentSlide].classList.add("slider__item_active");
}

arrowPrev.onclick = () => {
	changeSlide(currentSlide - 1);
}

arrowNext.onclick = () => {
	changeSlide(currentSlide + 1);
}