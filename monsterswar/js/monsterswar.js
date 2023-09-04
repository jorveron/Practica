let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3




function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
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
    seleccionarMascotaEnemigo()
    
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

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function combate() {
    let spamVidasJugador = document.getElementById('vidas-jugador')
    let spamVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Es un empate")
        
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("Ganaste!")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste!")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste!")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste")
        vidasJugador--
        spamVidasJugador.innerHTML = vidasJugador
    }

    resultadoCombate()
}

function resultadoCombate() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones. GANASTE!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento. Perdiste!')
    }
    
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota de tu enemigo atacó con ' + ataqueEnemigo + '. Resultado: ' + resultado

    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
    numero = Math.floor(Math.random() * (max - min + 1) + 1)
    return numero
}



window.addEventListener('load', iniciarJuego)