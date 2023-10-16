const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciarJuego = document.getElementById('reiniciar-juego');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spamVidasJugador = document.getElementById('vidas-jugador');
const spamVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensaje = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

let monsters = [];
let ataqueJugador;
let ataqueEnemigo;
let opcionMonster;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Monster {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Monster(
  'Hipodoge',
  './assets/mokepons_mokepon_hipodoge_attack.png',
  5
);
let capipepo = new Monster(
  'Capipepo',
  './assets/mokepons_mokepon_capipepo_attack.png',
  5
);
let ratigueya = new Monster(
  'Ratigueya',
  './assets/mokepons_mokepon_ratigueya_attack.png',
  5
);

hipodoge.ataques.push(
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Tierra', id: 'boton-tierra' }
);

capipepo.ataques.push(
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Fuego', id: 'boton-fuego' }
);

ratigueya.ataques.push(
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Tierra', id: 'boton-tierra' }
);

monsters.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = 'none';
  sectionReiniciarJuego.style.display = 'none';

  monsters.forEach((monster) => {
    opcionMonster = `
    <input type="radio" name="mascota" id=${monster.nombre} />
    <label class="tarjeta-mascota" for=${monster.nombre} >
      <p>${monster.nombre} </p>
      <img src=${monster.foto} alt=${monster.nombre} >
    </label>
    `
    contenedorTarjetas.innerHTML += opcionMonster

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
  });

  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  botonFuego.addEventListener('click', ataqueFuego);
  botonAgua.addEventListener('click', ataqueAgua);
  botonTierra.addEventListener('click', ataqueTierra);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = 'none';
  sectionSeleccionarAtaque.style.display = 'flex';
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else {
    alert('Debes seleccionar una mascota para continuar.');
    location.reload();
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(1, 3);
  if (mascotaEnemigo == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaEnemigo == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else if (mascotaEnemigo == 3) {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }
}

function ataqueFuego() {
  ataqueJugador = 'Fuego';
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = 'Agua';
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = 'Tierra';
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'Fuego';
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'Agua';
  } else {
    ataqueEnemigo = 'Tierra';
  }
  combate();
}

function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje('Es un empate');
  } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
    crearMensaje('Ganaste!');
    vidasEnemigo--;
    spamVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
    crearMensaje('Ganaste!');
    vidasEnemigo--;
    spamVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
    crearMensaje('Ganaste!');
    vidasEnemigo--;
    spamVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje('Perdiste');
    vidasJugador--;
    spamVidasJugador.innerHTML = vidasJugador;
  }
  resultadoCombate();
}

function resultadoCombate() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal('Felicitaciones. GANASTE!');
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento. Perdiste!');
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement('p');
  let nuevoAtaqueDelEnemigo = document.createElement('p');
  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensaje.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  sectionReiniciarJuego.style.display = 'flex';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  numero = Math.floor(Math.random() * (max - min + 1) + 1);
  return numero;
}

window.addEventListener('load', iniciarJuego);
