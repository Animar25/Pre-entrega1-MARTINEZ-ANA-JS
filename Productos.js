function datosUsuario() {
    let nombreYApellido = prompt("Ingrese su Nombre y Apellido")

}

function agregueSuProducto() {
    let sumaTotal = 0;
    let agregarMasProductos = true
    while (agregarMasProductos){
    let seleccioneUnProducto = parseInt(prompt('Seleccione un producto: \n 1: Velas de Soja \n 2: Difusores y Home Spray \n 3: Bath Bombs \n 4: Jabones'));
    
    switch(seleccioneUnProducto){
        case 1:
            sumaTotal = sumaTotal+3000
            break;
            case 2:
            sumaTotal = sumaTotal+4000
            break;
            case 3:
            sumaTotal = sumaTotal+2500
            break;
            case 4:
            sumaTotal = sumaTotal+1800
            break;
            default: 
            alert("La opción ingresada no es válida. Por favor vuelva a intentar.")
            break;

    }
    alert("El monto a abonar es de: $" + sumaTotal)
    let anadirMasProductos = parseInt(prompt ("Seguir Comprando? 1: Si, 2: No"))
    
    if(anadirMasProductos ===2){
        agregarMasProductos = false;
    }
}



alert("Precio Final: $" + sumaTotal)
alert("Gracias por su compra!")
}


window.addEventListener('load',function(){
agregueSuProducto(datosUsuario())
})
