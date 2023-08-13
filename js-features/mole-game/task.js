let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

(function catchMole() {
    for(let i = 1; i < 10; i++) {
        let hole = document.getElementById(`hole${i}`);
        hole.onclick = function() {
            let hasMole = hole.classList.contains("hole_has-mole");
            if(hasMole === true) {
                dead.textContent++;
            } else {
                lost.textContent++;
            }
        
            if(dead.textContent == 10) {
                alert("Победа!");
                restart();
            } else if (lost.textContent == 5) {
                alert("Вы проиграли!");
                restart();
            }
        }
    }
})();

function restart() {
    lost.textContent = 0;
    dead.textContent = 0;
}