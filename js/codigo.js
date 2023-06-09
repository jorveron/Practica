function aleatorio(min, max) {
    numero = Math.floor(Math.random() * (max - min + 1) + 1)
    return numero
}

function eleccion(jugada) {
    resultado = ""
    if(jugada == 1) {
        resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
    } else if(jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "Opción incorrecta"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera
let player = 0
let computer = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    
    player = prompt("Elije: 1 para piedra, 2 para papel, 3 para piedra")
    computer = aleatorio(1,3)
    alert("PC elige: " + eleccion(computer))
    alert("Tu eliges: " + eleccion(player))

    // Run game

    if(player == computer) {
        alert("Es un empate")
    } else if(player == 1 && computer == 3) {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else if(player == 2 && computer == 1) {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else if(player == 3 && computer == 2) {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }

}

alert("Ganaste " + triunfos + " veces. " + "Perdiste " + perdidas + " veces")