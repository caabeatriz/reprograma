// Primeiro pegue o elemento <table>
// que ja esta la no HTML.
const table = document.querySelector("table")

// Depois defina um tamanho para
// a nossa tabela. Tamanho significa
// numero de celulas e colunas.
const size = 2
// Inicial uma lista que ira conter
// todos os <td>s da pagina organizados
// como eles estao arganizados na pagina.
let matrix = []
// Entao crie um loop que vai rodar por todas
// as celulas da tabela. Ele tera um loop dentro
// do outro, o loop externo sera pelas linhas
// e o interno pelas celulas de cada linha.
for (let i = 0; i < size; i++) {
	// Crie um novo elemento <tr> que ira
	// receber todos os <td>
	const row = document.createElement("tr")
	// Crie uma nova lista para colocar na 
	// nova `matrix`.
	let cell_list = []
	for (let j = 0; j < size; j++) {
		// Crie um novo elemento <td>.
		const cell = document.createElement("td")
		// Coloque esse elemento dentro la <tr>
		// que criamos no loop externo.
		row.appendChild(cell)
		// Coloque o novo <td> criado dentro
		// da nossa `matrix`.
		cell_list.push(cell)
	}
	// Coloque o <tr> recem populado, dentro
	// da nossa <table>.
	table.appendChild(row)
	// Coloca a nova linha dentro da nossa `matrix`.
	matrix.push(cell_list)

	
}

			function aleatorio(inferior,superior){//não suporto plagio, por isso estou falando: não fui eu que criei essa funcao :P autoria do pessoal da criarweb
			    var numPossibilidades = superior - inferior;
			    aleat = Math.random() * numPossibilidades 
			    aleat = Math.floor(aleat);
			    return parseInt(inferior) + aleat 
			} 
			
			window.onload = function() {
			    var imagens=["url('cat.svg')" ];//exemplo de array com enderecos para imagens
			//     imagens.style.display = none
			    var tabela = document.querySelector("table");//pega uma referencia a tabela 
			
			    for(r=0; r<tabela.rows.length; r++) {//percorre as linhas da tabela
			        for(c=0; c<tabela.rows[r].cells.length; c++) {
				  if(imagens.length == 0) {//se não houver mais imagens no array, ele simplesmente para de por imagens...
				      r = tabela.rows.length;
				      break;
				  }
				  var imgRandom = aleatorio(0,2);
				  //cria variavel que vai referenciar uma posicao no array de imagens... 
				  //gera um numero randomico de 0 ate o maximo de elementos do array-1, ouseja, "percorre" todo o array 
				  tabela.rows[r].cells[c].style.backgroundImage = imagens[imgRandom]//insere a imagem no background. Troque por backgroundImage = "url("+imgens[imgRandom]+")";
				  imagens.splice(imgRandom, 1);//primeira propriedade determina qual posicao tu quer mecher
				  //e a segunda, se for 1 ela deleta a posicao atual e tras todas as outras para tras...
				  //faco isso para que as imagens não se repitam :P
			        } 
			    }
			}
			


for (const [row_index, row] of matrix.entries()) {
	for (const [cell_index, cell] of row.entries()) {
		// Para cada celula na tabela,
		// escute pelo envento de clique.
		cell.addEventListener("click", event => {
			
			// Primeiro tire a pintura
			// de todos os elementos pintados.
			for (const painted_cell of document.querySelectorAll("td.painted")) {
				painted_cell.classList.remove("painted")
			}

			cell.onclick=cell.classList.add("painted")
			if(cell.onclick==aleat) {
				imagens.style.display = "flex"
			}
			
		})
	}}
