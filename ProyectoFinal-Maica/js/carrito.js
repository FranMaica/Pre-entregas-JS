let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, img, genero, precio) {
    const juegoExistente = carrito.find(juego => juego.nombre === nombre);
    if (juegoExistente) {
        mostrarAlertaCarrito(); // Mostrar alerta si el juego ya está en el carrito
        return;
    }

    const juego = { nombre, img, genero, precio };
    carrito.push(juego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(`Agregado al carrito: ${nombre}`);
    mostrarCarrito(); // Actualiza la tabla del carrito
    actualizarContadorCarrito(); // Actualiza el contador de productos en el icono del carrito
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const contenedor = document.querySelector('#cart-container tbody');
    contenedor.innerHTML = ''; // Limpiamos el contenido anterior de la tabla
    
    let total = 0;
    
    carrito.forEach((juego, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img class="img-cart" src="${juego.img}" alt="${juego.nombre}" /></td>
            <td>${juego.nombre}</td>
            <td>$${juego.precio.toFixed(2)}</td>
            <td>1</td>
            <td><i class="fa-regular fa-circle-xmark circleCart" onclick="eliminarDelCarrito(${index}, event)"></i></td>
        `;
        contenedor.appendChild(fila); // Añadimos la fila a la tabla

        total += juego.precio; // Sumamos el precio al total
    });

    // Actualizamos el precio total en algún elemento (puedes definir dónde lo deseas mostrar)
    // document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index, event) {
    event.stopPropagation(); // Evitamos que el clic en la "X" cierre el carrito
    carrito.splice(index, 1); // Eliminamos el juego del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardamos el carrito actualizado
    mostrarCarrito(); // Volvemos a mostrar el carrito actualizado
    actualizarContadorCarrito(); // Actualiza el contador de productos en el icono del carrito
}

// Función para actualizar el contador de productos en el icono del carrito
function actualizarContadorCarrito() {
    const contador = document.querySelector('.cart-count');
    const cantidad = carrito.length; // Obtener la cantidad de productos en el carrito
    contador.textContent = cantidad > 0 ? cantidad : ''; // Actualizar el contenido del contador
}

// Función para mostrar la alerta del carrito
function mostrarAlertaCarrito() {
    const alerta = document.getElementById('alert-cart');
    alerta.classList.remove('d-none');
    alerta.classList.add('d-flex');
    setTimeout(() => {
        alerta.classList.remove('d-flex');
        alerta.classList.add('d-none');
    }, 3000); // Ocultar la alerta después de 3 segundos
}

// Mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito(); // Muestra el carrito al cargar la página
    actualizarContadorCarrito(); // Actualiza el contador al cargar la página

    const contenedor = document.getElementById('cart-button');
    const dropdownCart = document.getElementById('cart-container');
    
    contenedor.addEventListener('click', () => {
        dropdownCart.classList.toggle('d-none');
        dropdownCart.classList.toggle('d-block');
    });
});
