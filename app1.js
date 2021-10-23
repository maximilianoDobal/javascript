// =======================


class producto {

    // == CONSTRUCTOR ==
    constructor (id, nombre, marca, tipo, colores, precio, stock){

        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.colores = colores;
        this.precio = precio;
        this.stock = stock;

    }

    restarStock (cantidad) {
        
        this.stock = this.stock-cantidad
    }
    sumarStock(cantidad){
        this.stock+=cantidad
    }
    
}

const productos = [

    new producto (1, "Urban", "Specialized", "Urbanas", ["Negra", "Blanca"], 3000, 20),
    new producto (2, "Old Style", "Canyon", "Urbana", ["Negra", "Blanca", ], 3500, 16),
    new producto (3, "Limitless", "Specialized", "BMX", ["Roja", "Violeta", "Rosa", "Amarrillo"], 4000, 20),
    new producto (4, "Dark Night", "Scott", "BMX", ["Negra"], 2000, 25),
    new producto (5, "Limit Push", "BMC", "Ruta", ["Marron", "Blanca", "Violeta"], 2500, 20),

]

productos.push(new producto (6, "old Vibe", "Giant", "Urbanas", ["Roja", "Azul", "Negra"], 4000, 15))


const filtrado = productos.filter((prod) => prod.marca === "Specialized")

console.log(productos)
console.log(filtrado)


// ===============================


class usuario{

    // CONSTRUCTOR
    constructor () {

        this.usuario = prompt("Ingrese su Usuario")
        this.consumidorFinal = prompt("¿Usted es consumidor final?").toLowerCase()
        
        while (this.consumidorFinal !== "si" && this.consumidorFinal !== "no") {
            this.consumidorFinal = prompt("Por favor decir si es Consumidor Final").toLowerCase()
        }
        
    }
    
}

const usuario1 = new usuario 

let iva = 0

if (usuario1.consumidorFinal === "si"){
    iva = 21
} else {
    iva = 0
}

usuario1.iva = iva


console.log(usuario1)
console.log(iva)