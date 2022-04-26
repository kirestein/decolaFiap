var listaDeFilmes = [
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTphk3rWo-esFX6XPZtJtbmt4JybclqA9I09R5Gjk-DqC8d2_Xb",
  "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035",
  "https://media.fstatic.com/gzsYUKX6TO32cryrv42xQOsppaE=/290x478/smart/media/movies/covers/2020/05/MASK_OF_ZORRO_1400x2100_EST.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b8/The_Impossible.jpg/200px-The_Impossible.jpg",
  "https://a-static.mlcdn.com.br/1500x1500/quadro-decorativo-o-poderoso-chefao-filmes-cartaz-cinema-decoracoes-com-moldura-g02-vital-quadros/vitalquadrosdobrasil/080008840804/006c5306ba436d3cb06b1468472269dd.jpg"
];

var titulos = [
  "Shang Chi",
  "Ultimato",
  "Zorro",
  "Guerra Infinita",
  "O Impssível",
  "O Poderoso Chefão"
];
var catalogo = document.querySelector("#catalogo");
var i = 0;
var erro = document.querySelector("#erro");

for (i; i < listaDeFilmes.length; i++) {
  catalogo.innerHTML += `<div class="filme"><img src=${listaDeFilmes[i]}><figcaption>${titulos[i]}</figcaption></div>`;
}

var filmeRepetido = true;

function Cadastrar() {
  var novoFilme = document.querySelector("#filme").value;
  var titulo = document.querySelector("#titulo").value;

  if (listaDeFilmes.includes(novoFilme)) {
    erro.innerHTML = `Filme ${novoFilme} já cadastrado.`;
  } else {
    listaDeFilmes.push(novoFilme);
    titulos.push(titulo);
    erro.innerHTML = "";
    mostrarFilmes();
  }
  document.querySelector("#filme").value = "";
  document.querySelector("#titulo").value = "";
}

function mostrarFilmes() {
  do {
    catalogo.innerHTML += `<div class="filme"><img src=${listaDeFilmes[i]}><figcaption>${titulos[i]}`;
    i++;
  } while (i < listaDeFilmes.length);
}

function DeleteButton() {
  listaDeFilmes[i].innerHTML = `<button tyoe="submit"> deletar </button>`;
}