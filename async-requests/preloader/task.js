const imgLoader = document.querySelector(".loader");
const itemsCurrency = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
	if (xhr.readyState === xhr.DONE) {
		if (xhr.status !== 200) {
			setTimeout(() => {
				return alert("Ошибка загрузки данных");
			}, 1000)
		}
		if (xhr.status === 200) {
			imgLoader.classList.remove("loader_active");
			let xhrAnswer = xhr.response;
	        let valute = xhrAnswer.response.Valute;

	        for (let key in valute) {
		        let charCode = valute[key].CharCode;
		        let valuteValue = valute[key].Value;

		        items.insertAdjacentHTML(`beforeend`, `
                <div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${valuteValue}</div>
                <div class="item__currency">руб.</div>
                </div>
                `);
	        }
		}
	}
}