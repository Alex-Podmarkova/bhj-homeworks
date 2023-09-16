let textEditor = document.getElementById("editor");

textEditor.addEventListener("input", (e) => {
	localStorage.setItem("text", textEditor.value)
})

window.onload = function() {
	textEditor.value = localStorage.getItem("text")
}
