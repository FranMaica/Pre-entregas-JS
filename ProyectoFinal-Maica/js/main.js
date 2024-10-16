// Definición de los juegos
const juegos = [
    { nombre: 'VALORANT', img: "https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg", genero: 'Shooter', plataforma: 'PC', precio: 12.99 },
    { nombre: 'MINECRAFT', img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70070000016597/0a33bcaba879403460afe2ff2aafaaefeede964e0fc11a430f71077867cc87f1", genero: 'Aventura', plataforma: 'PC', precio: 15.99 },
    { nombre: 'PHASMOPHOBIA', img: "https://i.ytimg.com/vi/Qv-lRjUZ-Ds/maxresdefault.jpg", genero: 'Terror', plataforma: 'PC', precio: 7.99 },
    { nombre: 'FIFA 24', img: "https://i.ytimg.com/vi/bn0Aw07dY3I/maxresdefault.jpg", genero: 'Football', plataforma: 'PlayStation', precio: 34.36 },
    { nombre: 'FORAGER', img: "https://images.gog-statics.com/2a9ee911d237044ca4c5d3c5058553437827e1c4986a4394828f992f18449239.jpg", genero: 'aventura', plataforma: 'PC', precio: 8.99 },
    { nombre: 'SUPERLIMINAL', img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Superliminal-2-Background.jpg", genero: 'Accion', plataforma: 'PC', precio: 26.36 },
    { nombre: 'TERRARIA', img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1666290860", genero: 'Indie', plataforma: 'PC', precio: 2.36 },
    { nombre: 'GEOMETRY DASH', img: "https://thegeometrydash.net/wp-content/uploads/2024/03/Geometry-Dash-1-1-1024x576.webp", genero: 'Accion', plataforma: 'PC', precio: 18.36 },
    { nombre: 'BLOONS TD 6', img: "https://cdn.nkstatic.com/videos-screenshots/BTD6/6.jpg", genero: 'Estrategia', plataforma: 'PC', precio: 25.36},
];

// Almacenar juegos en Local Storage
localStorage.setItem('juegos', JSON.stringify(juegos));

// Recuperar juegos del Local Storage
const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];

function crearCardJuego(titulo, img, descripcion, precio) {
    const contenedor = document.getElementById('game-cards-container');

    const card = document.createElement('div');
    card.classList.add('game-card');

    const tituloJuego = document.createElement('h2');
    tituloJuego.textContent = titulo;

    const imgJuego = document.createElement("img")
    imgJuego.src = img

    const descripcionJuego = document.createElement('p');
    descripcionJuego.textContent = descripcion;

    const precioJuego = document.createElement('p');
    precioJuego.textContent = `Precio: $${precio}`;

    const botonCarrito = document.createElement('button');
    botonCarrito.textContent = 'Agregar al carrito';
    botonCarrito.classList.add('carrito-button');
    botonCarrito.classList.add('btn');
    botonCarrito.classList.add('btn-success');

    // Llamar a la función de carrito.js para agregar el juego al carrito
    botonCarrito.addEventListener('click', () => {
        agregarAlCarrito(titulo, img, descripcion, precio);
    });

    card.appendChild(tituloJuego);
    card.appendChild(imgJuego)
    card.appendChild(descripcionJuego);
    card.appendChild(precioJuego);
    card.appendChild(botonCarrito);

    contenedor.appendChild(card);
}

function mostrarJuegos(juegosFiltrados) {
    const contenedor = document.getElementById('game-cards-container');
    contenedor.innerHTML = '';

    juegosFiltrados.forEach(juego => {
        crearCardJuego(juego.nombre, juego.img, juego.genero, juego.precio);
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
