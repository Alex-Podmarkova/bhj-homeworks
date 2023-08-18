let menuLink = Array.from(document.querySelectorAll(".menu__link"));

menuLink.forEach(link => {
  link.onclick = function (event) {
    event.preventDefault();
    link.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");
    return false;
  }
 }) 