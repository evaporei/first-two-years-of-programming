

window.onload = () => {
    let lamp = document.getElementById("lamp")
    lamp.addEventListener("click", function () {
        switch (this.getAttribute("src")) {
            case "img/xlamp_off.png":
                this.setAttribute("src", "img/xlamp_on.png")
                break
            case "img/xlamp_on.png":
                this.setAttribute("src", "img/xlamp_off.png")
                break
        }
        //tal chave é apenas um número, como se fosse um id (1,2,3...)
        let chave = setTimeout(desligar, 3000)
        clearTimeout(chave)
    })

    setInterval(apresentaHorario, 1000)

    function desligar() {
        document.getElementById("lamp").src = "img/xlamp_off.png"
    }

    function apresentaHorario() {
        let agora = new Date()
        let horario = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`
        document.getElementById("horario").innerHTML = horario
    }
}