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
