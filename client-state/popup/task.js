let modal = document.getElementById("subscribe-modal");
let modalClose = document.querySelector(".modal__close");

window.onload = function () {
    if (document.cookie.indexOf("close") == -1) {
        modal.classList.add("modal_active");
    }    
}

modalClose.addEventListener("click", event => {
        event.preventDefault();
        event.target.closest(".modal").classList.remove("modal_active");
        document.cookie = "close=true"
    })
