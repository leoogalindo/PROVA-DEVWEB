
function Pintar(){
    const data = Number(document.getElementById("data").value)
    
    let elemento = document.getElementById(data).getAttribute("class");

    let controle = "." + elemento

    let classe = document.querySelector(controle)

    console.log(elemento)

    classe.style.backgroundColor = "red" 
}
