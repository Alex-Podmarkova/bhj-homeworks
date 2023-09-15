let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = function (e) {
    	progress.value = e.loaded / e.total;
    }
    xhr.send(new FormData(form));
})