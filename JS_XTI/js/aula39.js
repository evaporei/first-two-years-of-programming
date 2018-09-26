if (localStorage.getItem("lampada"))
    lamp.setAttribute("src", localStorage.getItem("lampada"))
window.onload = () => {
    let lamp = document.getElementById("lamp")

    lamp.addEventListener("click", function () {
        switch (this.getAttribute("src")) {
            case "img/xlamp_off.png":
                localStorage.setItem("lampada", "img/xlamp_on.png")
                this.setAttribute("src", "img/xlamp_on.png")
                break
            case "img/xlamp_on.png":
                localStorage.setItem("lampada", "img/xlamp_off.png")
                this.setAttribute("src", "img/xlamp_off.png")
                break
        }
        
    })

    setInterval(apresentaHorario, 1000)

    function apresentaHorario() {
        let agora = new Date()
        let horario = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`
        document.getElementById("horario").innerHTML = horario
    }
}