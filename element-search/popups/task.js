let modalMain = document.getElementById("modal_main");
let modalClose = Array.from(document.querySelectorAll(".modal__close"));
let modalSuccess = document.getElementById("modal_success");
let successButton = document.querySelector(".show-success");

modalMain.classList.add("modal_active");

modalClose.forEach(closeButton => {
  closeButton.onclick  = function () {
    closeButton.closest(".modal").classList.remove("modal_active");
	}
});


successButton.onclick = function () {
  modalSuccess.classList.add("modal_active");
  modalMain.classList.remove("modal_active");
}