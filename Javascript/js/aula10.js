"use strict";
let poltronas = [false, true, false, true, true, true, false, true, false]

;(function carregarPoltornas(){
    let imagens = document.getElementsByTagName("img")//array de imagens
    for (let i = 0; i < imagens.length; i++) {
        if (poltronas[i]) {
            imagens[i].src = "img/poltrona_disponivel.png"
        } else {
            imagens[i].src = "img/poltrona_ocupada.png"
        }
        imagens[i].style.height = "100px"
        imagens[i].style.width = "100px"

    }
})()

document.getElementById("haha").onclick = selecionarPoltrona

function selecionarPoltrona() {
    alert('funfa')
}
