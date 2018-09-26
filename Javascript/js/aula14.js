"use strict"

let formulario = document.getElementById("formulario")
function validar() {
    let cpf = formulario.cpf
    let email = formulario.email

                    //086410428.65
    let regexCPF = /^\d{3}\.?\d{3}\.?\d{3}\.?\d{2}$/
                    //otaviopp8@gmail.com
    let regexEmail = /\w+@\w+\.\w{2,3}/i


    if (regexCPF.test(cpf.value))
        alert("CPF Válido")
    else
        alert("Ajuste o CPF!")

    if (regexEmail.test(email.value))
        alert("E-mail Válido")
    else
        alert("Ajuste o E-mail!")

}
