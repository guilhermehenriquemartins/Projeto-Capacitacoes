var menu = window.document.getElementById('items')

function burguer() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}

var imagemHtml5 = window.document.getElementById('imagem-html5')
var imagemHtml5Sombra = window.document.getElementById('imagem-html5sombra')
var imagemCss3 = window.document.getElementById('imagem-css3')
var imagemCss3Sombra = window.document.getElementById('imagem-css3sombra')
var imagemJs = window.document.getElementById('imagem-javascript')
var imagemJsSombra = window.document.getElementById('imagem-javascriptsombra')

function entrou1() {
  imagemHtml5.style.display = 'none'
  imagemHtml5Sombra.style.display = 'inline'
  imagemHtml5Sombra.style.transitionDuration = '.3s'
}

function saiu1() {
  imagemHtml5Sombra.style.display = 'none'
  imagemHtml5.style.display = 'inline'
}

function moveu1() {
  imagemHtml5.style.display = 'none'
  imagemHtml5Sombra.style.display = 'inline'
}

function entrou2() {
  imagemCss3.style.display = 'none'
  imagemCss3Sombra.style.display = 'inline'
}

function saiu2() {
  imagemCss3Sombra.style.display = 'none'
  imagemCss3.style.display = 'inline'
}

function moveu2() {
  imagemCss3.style.display = 'none'
  imagemCss3Sombra.style.display = 'inline'
}

function entrou3() {
  imagemJs.style.display = 'none'
  imagemJsSombra.style.display = 'inline'
}

function saiu3() {
  imagemJsSombra.style.display = 'none'
  imagemJs.style.display = 'inline'
}

function moveu3() {
  imagemJs.style.display = 'none'
  imagemJsSombra.style.display = 'inline'
}