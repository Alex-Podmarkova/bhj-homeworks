let fontSize = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");

fontSize.forEach(element => {
  element.addEventListener("click", function(event) {
    event.preventDefault();

    fontSize.forEach(element => {
      element.classList.remove("font-size_active");
    })
    event.target.classList.add("font-size_active");

    if (event.target.classList.contains("font-size_small")) {
      book.classList = "book book_fs-small";
    } 
    else if (event.target.classList.contains("font-size_big")) {
      book.classList = "book book_fs-big";
    } 
    else {
      book.classList = "book";
    } 
  })
})