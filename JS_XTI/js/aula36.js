window.onload = () => {
    const btn = document.getElementById("botao")
    const div = document.getElementById("primeira")

    btn.onclick = function (event = window.event) {
        alert(this.id)

        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true
    }

    document.getElementById("texto").onblur = function () {
        alert(this.value)
    }
    //div.onclick = () => alert("div")
    //document.onclick = () => alert("document")


    // btn.onclick = () => alert("um")
    //btn.onclick = () => false
    //btn.addEventListener("click", () => false, false)
    // btn.onclick = (event) => {
    //     let evento = event ? event : window.event
    //     alert(evento.type + "\n" +
    //           `X=${evento.screenX}, Y=${evento.screenY}`)
    // }
    // btn.addEventListener("click", nope, false)
    // btn.addEventListener("click", () => alert("yup"), false)
    // btn.removeEventListener("click", nope, false)//gets removed
    // btn.removeEventListener("click", () => alert("yup"), false)//does not get removed

}
function nope () {
    () => alert("nope")
}