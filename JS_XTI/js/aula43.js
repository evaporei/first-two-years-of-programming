const $ = (query) => document.querySelectorAll(query)
window.onload = function () {

    // Navegar na árvore do documento

    // Tipos de nós (Documento, Elemento, Atributo, Texto)

    // Parentesco dos nós (Pai=parent, Filho=child, Irmão=sibling)

    const div = $("div")[0]

    console.log(div)// div
    console.log(div.parentNode)// body
    console.log(div.childNodes)// [text, ul, text]

    const ul = div.childNodes[1]
    console.log(ul)// ul
    console.log(ul.nodeName)// UL
    console.log(ul.nodeType)// 1=Elemento, 2=Atributo, 3=Texto

    console.log(ul.firstChild)// text
    console.log(ul.lastChild.nodeType)// text

    console.log(ul.firstChild.firstChild.nodeValue)

}