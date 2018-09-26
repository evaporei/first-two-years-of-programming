window.onload = () => {

/*
    alert("Olá")

    let respostaBolo = confirm("Você gosta de bolo?")
    let respostaNome = prompt("Qual é o seu nome?")

    console.log(respostaBolo)
    console.log(respostaNome)
*/
    //pop up -> assim como os outros pode ser bloqueado já que foi abusado no passado
    //window.open("aula36.html", "titulo", "width=300,height=500,toobar=no,location=no")

    /*
    https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo

    You can't resize a window or tab that wasn’t created by window.open.
    You can't resize a window or tab when it’s in a window with more than one tab.
     */
    //almost deprecated
    //window.resizeTo(300, 200)
//almost deprecated
//    window.moveTo(777, 888)

    document.getElementById("teste").innerHTML = "<h1>Teste de innerHTML</h1>"
/*
    alert(window.navigator.platform + "\n" +
          window.navigator.userAgent + "\n" +
          window.navigator.language)
*/
/*
    //array de plugins
    let pluginsNavigator = navigator.plugins

    pluginsNavigator = Array.from(pluginsNavigator)

    alert(pluginsNavigator.reduce((previous, current) => `${previous}${current.name}\n`, ""))
*/
/*
    alert(location.href)//file://C:/Users//=.../aula37.js
    alert(location.href)//file
*/
/*
    alert(screen.width)
    alert(screen.height)
*/
/*
    history.go(2)//duas para frente
    history.go(-2)//duas para trás
*/
}