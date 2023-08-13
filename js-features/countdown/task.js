let contestTimer = function () {
  let timer = document.getElementById("timer");
  if(timer.textContent == 0) {
  	alert("Вы победили в конкурсе!");
  	clearInterval(timerId);
  }
  else {
  	timer.textContent -= 1;
  }
 }

let timerId = setInterval(contestTimer, 1000);