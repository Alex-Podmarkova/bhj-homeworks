let singInForm = document.getElementById('signin__form');
let signIn = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

window.addEventListener("load", () => {
    if (localStorage.getItem('user_id')) {
        signIn.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.getItem('user_id');
    }
})

singInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(singInForm);
    xhr.responseType = 'json';
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.onload = function () {
        let id = xhr.response.user_id;
        if (xhr.response.success) {
            localStorage.setItem('user_id', id);
            signIn.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = localStorage.getItem('user_id');
        } else {
            alert('Неверный логин/пароль');
        }
    }
    xhr.send(formData);
})