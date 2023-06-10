function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Debes seleccionar una mascota para continuar.")
    }
    
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaEnemigo == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaEnemigo == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatorio(min, max) {
    numero = Math.floor(Math.random() * (max - min + 1) + 1)
    return numero
}

window.addEventListener('load', iniciarJuego)