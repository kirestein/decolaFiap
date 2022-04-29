let listaDeFilmes = [
  'https://br.web.img3.acsta.net/pictures/14/08/11/13/34/537036.jpg',
  'https://img.elo7.com.br/product/original/39B7AE4/quadro-interestelar-a3-com-vidro-quadro-maritimo.jpg',
  'https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg',
  'https://ingresso-a.akamaihd.net/img/cinema/cartaz/6429-cartaz.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png'
]

let listaDeTitulos = [
  'Relatos Selvagens',
  'Interestelar',
  'Truque de mestre',
  'Cantando na Chuva',
  'Efeito Borboleta',
  'Jogador Nº 1'
]

//! DOM DOCMENT OBJECT MODEL
let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
  catalogo.innerHTML += `<div class="filme">
    <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}
  </div>`
}

let filmeRepetido = true

function cadastrar() {
  let novoFilme = document.querySelector('#filme').value
  
  let novoTitulo = document.querySelector('#titulo').value
  
  if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
    erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
  }else{
    listaDeFilmes.push(novoFilme)
    listaDeTitulos.push(novoTitulo)
    erro.innerHTML = ''
    mostrarFilmes()
  }
  document.querySelector('#filme').value = ''  
  document.querySelector('#titulo').value = ''  
  
}

function mostrarFilmes() {
  do {
    catalogo.innerHTML += `
    <div class="filme">
      <img src=${listaDeFilmes[i]} alt=${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
    </div>
    `
    i++
  } while (i < listaDeFilmes.length)
}