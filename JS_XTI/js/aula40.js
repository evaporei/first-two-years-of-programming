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
    console.log(img)

    img.border = "6px;"
    img.setAttribute("border", "6px")


}