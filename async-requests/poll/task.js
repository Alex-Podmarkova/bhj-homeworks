let pollTitle = document.querySelector(".poll__title");
let pollAnswers = document.querySelector(".poll__answers_active"); 
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();
xhr.onload = function() {
		if (xhr.status != 200) {
           alert("Ошибка загрузки данных");
		}
		else if (xhr.status === 200) {
			let xhrAnswer = xhr.response;
			pollTitle.innerText = xhrAnswer.data.title;
			let answers = xhrAnswer.data.answers;
			for (let i = 0; i < answers.length; i++) {
				pollAnswers.insertAdjacentHTML(`beforeend`, `
					<button class="poll__answer">${answers[i]}</button>
					`);
			}
            
            let buttonAnswer = document.querySelectorAll(".poll__answer");
            buttonAnswer.forEach(button => {
            	button.addEventListener("click", (event) => {
                    event.preventDefault();
                    alert("Спасибо, ваш голос засчитан!");
            	})
            })
		}
}