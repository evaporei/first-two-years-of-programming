const $ = (query) => document.querySelector(query)
const $all = (query) => document.querySelectorAll(query)
window.onload = function () {

    $("#botao").onclick = function () {
        
        let ajax = new XMLHttpRequest()

        const div = $("#resposta")

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                // alert(ajax.responseText)
                // div.appendChild(document.createTextNode(ajax.responseText))
                // div.innerHTML += ajax.responseText

                const xml = ajax.responseXML// this xml object can be manipulated using the dom api, responseText can't
                const url = xml.getElementsByTagName("url")[0].firstChild.nodeValue
                // const url = xml.slice(xml.indexOf("<url>"), xml.indexOf("</url>")).replace("<url>", "")
                
                console.log(url)

            }
        }

        // ajax.open("GET", "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector")
        // ajax.open("GET", "http://www.localhost:3000/todos")
        // ajax.open("GET", "ajax/arquivo.txt")
        // ajax.open("GET", "ajax/arquivo.html")        
        ajax.open("GET", "ajax/arquivo.xml")        
        
        // ajax.send("param1=xpto&param2=blala")
        ajax.send()

    }

}