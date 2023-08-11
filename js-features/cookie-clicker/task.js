let clickerCounter = document.getElementById("clicker__counter");
let cookiePic = document.getElementById("cookie");

cookiePic.onclick = () => {
  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
	if (clickerCounter.textContent % 2 == 0) {
	  cookiePic.width -= 40;
	  cookiePic.height -= 40;
	}
	if (clickerCounter.textContent % 2 !== 0) {
		cookiePic.width += 40;
		cookiePic.height += 40;
	}
}