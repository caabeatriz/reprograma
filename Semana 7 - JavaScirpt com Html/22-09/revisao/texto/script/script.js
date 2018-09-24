// const btnAumentar = document.getElementById("aumentar")
// const elemento = document.querySelector(".article")
// btnAumentar.addEventListener("click", 

function fonte (e){
    e.preventDefault()

	var fonte = elemento.css('font-size');
	if (e == "aumentar") {
		elemento.css("fontSize", parseInt(fonte) + 1);
	}

}
