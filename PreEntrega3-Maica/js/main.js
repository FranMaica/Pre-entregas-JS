// Definición de los juegos
const juegos = [
    { nombre: 'VALORANT', genero: 'Shooter', plataforma: 'PC', precio: 12.99 },
    { nombre: 'MINECRAFT', genero: 'Aventura', plataforma: 'PC', precio: 15.99 },
    { nombre: 'PHASMOPHOBIA', genero: 'Terror', plataforma: 'PC', precio: 7.99 },
    { nombre: 'FIFA 24', genero: 'Football', plataforma: 'PlayStation', precio: 34.36 }
];

// Almacenar juegos en Local Storage
localStorage.setItem('juegos', JSON.stringify(juegos));

// Recuperar juegos del Local Storage
const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];

function crearCardJuego(titulo, descripcion, precio) {
    const contenedor = document.getElementById('game-cards-container');

    const card = document.createElement('div');
    card.classList.add('game-card');

    const tituloJuego = document.createElement('h2');
    tituloJuego.textContent = titulo;

    const descripcionJuego = document.createElement('p');
    descripcionJuego.textContent = descripcion;

    const precioJuego = document.createElement('p');
    precioJuego.textContent = `Precio: $${precio}`;

    const botonCarrito = document.createElement('button');
    botonCarrito.textContent = 'Agregar al carrito';
    botonCarrito.classList.add('carrito-button');

    botonCarrito.addEventListener('mouseup', () => {
        agregarAlCarrito(titulo, descripcion, precio);
    });

    card.appendChild(tituloJuego);
    card.appendChild(descripcionJuego);
    card.appendChild(precioJuego);
    card.appendChild(botonCarrito);

    contenedor.appendChild(card);
}

function agregarAlCarrito(nombre, genero, precio) {
    const juego = { nombre, genero, precio };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(juego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(`Agregado al carrito: ${nombre}`);
}

function mostrarJuegos(juegosFiltrados) {
    const contenedor = document.getElementById('game-cards-container');
    contenedor.innerHTML = '';

    juegosFiltrados.forEach(juego => {
        crearCardJuego(juego.nombre, juego.genero, juego.precio);
    });
}

function filtrarJuegosPorNombre(nombre) {
    if (nombre.trim() === "") {
        mostrarJuegos(juegosGuardados);
        return;
    }

    const juegosFiltrados = juegosGuardados.filter(juego => 
        juego.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    
    mostrarJuegos(juegosFiltrados);
}

document.getElementById('nombre').addEventListener('input', (event) => {
    const nombre = event.target.value;
    filtrarJuegosPorNombre(nombre);
});

// Funcionalidad para el botón de "Borrar"
document.getElementById('clear-filter').addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    mostrarJuegos(juegosGuardados);
});

// Mostrar todos los juegos al cargar la página
mostrarJuegos(juegosGuardados);
