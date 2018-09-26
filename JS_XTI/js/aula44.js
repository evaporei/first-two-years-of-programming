const $ = (query) => document.querySelectorAll(query)
window.onload = function () {

    const div = $("div")[0]

    let hr = document.createElement("hr")
    div.appendChild(hr)

    let li = document.createElement("li")
    li.appendChild(document.createTextNode("Teste de Lista"))
    div.childNodes[1].appendChild(li)
    
    let attribute = document.createAttribute("style")
    attribute.value = "color:blue;"
    li.setAttributeNode(attribute)
    //ou
    li.setAttribute("style", "color:blue")
    //ou
    li.style.color = "blue"


    const select = document.createElement("select")
    select.setAttribute("id", "estados")
    let option = document.createElement("option")
    option.setAttribute("value", "DF")
    let option2 = document.createElement("option")
    option2.setAttribute("value", "SP")
    option.appendChild(document.createTextNode("Distrito Federal"))
    option2.appendChild(document.createTextNode("São Paulo"))
    select.appendChild(option)
    select.appendChild(option2)
    div.appendChild(select)


    const del = div.childNodes[1]
    div.removeChild(del)

    const select2 = select.cloneNode(true)// parameter -> if all child elements should be copied
    div.appendChild(select2)

    const option3 = option.cloneNode(true)
    select.appendChild(option3)

}