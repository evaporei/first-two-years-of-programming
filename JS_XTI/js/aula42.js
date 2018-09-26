const $ = (string) => document.querySelector(string)
const $all = (string) => document.querySelectorAll(string)

window.onload = function () {

    // Localizar elementos: id, name, tag, selector

    let titulo = document.getElementById("titulo")
    let estados = document.getElementsByName("estados")
    let paragrafo = document.getElementsByClassName("paragrafo")
    let divs = document.getElementsByTagName("div")
    // alert(`${titulo}
    //        ${estados[0]}
    //        ${paragrafo[0]}
    //        ${divs[0]}`)

    // /*
    // [object HTMLHeadingElement]
    // [object HTMLSelectElement]
    // [object HTMLParagraphElement]
    // [object HTMLDivElement]
    // */
    
    // da mesma forma como o jquery funciona
    titulo = document.querySelector("#titulo")
    titulo.innerHTML = "Outro Texto!"

    titulo.style.color = "#0000FF"// DOM HTML API
    titulo.setAttribute("style", "color: #0000FF")// DOM CORE API -> mais genérica, usada com XML também
    

    // ambos são o mesmo
    let img = document.querySelector("img")
        img = document.getElementsByTagName("img")[0]
        img = $("img")
    //console.log(img)

    img.border = "6px;"
    img.setAttribute("border", "6px")


    // DOM HTML API

    /* Coleções de Elementos */
    //acesso de atributos dos elementos de forma rápida
    // alert(document.title)

    let select = $("select")
    Array.from(select).forEach(estado => console.log(estado.value))// Todos os atributos "value" dos option contidos na tag select foram "printados"

    let links = document.links// array like object com todos os links da página
    let images = document.images// array like object com todos as imagens da página
    let forms = document.forms// array like object com todos os formulários da página
    // possuem também uma função .item(nro) que recebe o número do item a ser atingido, como se fosse [nro] de um array/objeto

    /* Alterar Elementos */

    let tb = $all("table")[0]
        tb = $all("table").item(0)

    let row = tb.insertRow(-1)// insere sempre uma linha na última posição(-1)
    let cell0 = row.insertCell(0)
    cell0.appendChild(document.createTextNode("texto um"))
    let cell1 = row.insertCell(1)
    cell1.appendChild(document.createTextNode("texto 02"))

}