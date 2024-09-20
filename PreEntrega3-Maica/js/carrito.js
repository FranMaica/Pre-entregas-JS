let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    const contenedor = document.getElementById('cart-container');
    contenedor.innerHTML = '';

    let total = 0;
    carrito.forEach((juego, index) => {
        const card = document.createElement('div');
        card.classList.add('game-card');

        card.innerHTML = `
            <h2>${juego.nombre}</h2>
            <p>${juego.genero}</p>
            <p>Precio: $${juego.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;

        contenedor.appendChild(card);
        total += juego.precio;
    });

    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
