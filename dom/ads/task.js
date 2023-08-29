let rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let currentIndex = 0;

function toggleRotator() {
	rotatorCase.forEach((el) => {
		el.classList.remove("rotator__case_active");
	})
	currentIndex = (currentIndex + 1) % rotatorCase.length;
	rotatorCase[currentIndex].classList.add("rotator__case_active");
}

setInterval(toggleRotator, 1000);
