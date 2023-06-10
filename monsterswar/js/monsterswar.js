function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    
    if (inputHipodoge.checked) {
        alert("Tu mascota es Hipodoge. A luchar!")
    } else if (inputCapipepo.checked) {
        alert("Tu mascota es Capipepo. Es hora del duelo!")
    } else if (inputRatigueya.checked) {
        alert("Tu mascota es Ratigueya. Que comience la diversión!")
    } else {
        alert("Debes seleccionar una mascota para continuar.")
    }
    
}

window.addEventListener('load', iniciarJuego)