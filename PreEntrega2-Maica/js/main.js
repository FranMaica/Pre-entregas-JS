function saludar(){
    alert("Bienvenido a mi tienda de juegos, podra elejir muchos productos a buen precio")

}
let nombre = prompt("ingrese su nombre")

function comprarJuego(precioJuego, saldoDisponible) {
    if(saldoDisponible >= precioJuego) {
        alert("Has comprado un nuevo juego. ¡Que lo disfrutes!");
    } else {
        alert("Saldo insuficiente. Ingrese mas dinero para comprar el juego");
    }
}

let precioJuego = prompt("Ingresa el precio del juego que vas a comprar:");
let saldoDisponible = prompt("Ingresa tu saldo disponible en la cartera:");
comprarJuego(precioJuego, saldoDisponible);


function calcularTotalCarrito() {
    let total = 0;
    let continuar = true;

    while(continuar) {
        let precioJuego = prompt("Ingresa el precio del juego que quieres agregar al carrito:");
        total += precioJuego;

        continuar = confirm("¿Quieres agregar otro juego al carrito?");
    }

    alert(`El total a pagar por los juegos en tu carrito es: $${total}`);
}
calcularTotalCarrito();


const juegos = [
    { nombre: 'VALORANT', genero: 'Shooter', plataforma: 'PC', precio: 12.99 },
    { nombre: 'MINECRAFT', genero: 'Aventura', plataforma: 'PC', precio: 15.99 },
    { nombre: 'PHASMOPHOBIA', genero: 'Terror', plataforma: 'PC', precio: 7.99 },
    { nombre: 'FIFA 24', genero: 'Football', plataforma: 'PlayStation', precio: 34.36 }
];

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

    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Comprar';
    botonComprar.addEventListener('click', () => {
        alert(`Has comprado ${titulo} por $${precio}`);
    });

    card.appendChild(tituloJuego);
    card.appendChild(descripcionJuego);
    card.appendChild(precioJuego);
    card.appendChild(botonComprar);

    contenedor.appendChild(card);
}

function mostrarJuegos(juegosFiltrados) {
    const contenedor = document.getElementById('game-cards-container');
    contenedor.innerHTML = '';

    juegosFiltrados.forEach(juego => {
        crearCardJuego(juego.nombre, juego.genero, juego.precio);
    });
}

function filtrarJuegosPorGenero(genero) {
    if (genero.trim() === "") {
        mostrarJuegos(juegos); 
        return;    // Mostrar todos los juegos
    }

    const juegosFiltrados = juegos.filter(juego => 
        juego.genero.toLowerCase().includes(genero.toLowerCase())
    );
    
    mostrarJuegos(juegosFiltrados);
}
// Configura el evento input para el campo de búsqueda
document.getElementById('genero').addEventListener('input', (event) => {
    const genero = event.target.value;
    filtrarJuegosPorGenero(genero);
});

// Mostrar todos los juegos inicialmente
mostrarJuegos(juegos);
