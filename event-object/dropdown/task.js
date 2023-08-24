let dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");

function showList () {
	dropdownList.classList.toggle("dropdown__list_active");
} 

dropdownValue.addEventListener("click", showList);

dropdownItems.forEach((item) => {
	item.onclick = function (event) {
		event.preventDefault();
		dropdownValue.textContent = item.textContent;
		dropdownList.classList.toggle("dropdown__list_active");

	}
})
