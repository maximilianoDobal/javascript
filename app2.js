// =================================================

class producto {

    // == CONSTRUCTOR ==
    constructor (id, nombre, tipo, colores, talle, precio, stock){

        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.colores = colores;
        this.talle = talle;
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


const prod1 = new producto (1, "Remera Manga Largas Adidas", "Remera", "Negra, Blanca", "XL, L, M, S", 3000, 20)
const prod2 = new producto (2, "Remera Manga Cortas Adidas", "Remera", "Negro, Blanca", "XL, L, M, S", 3500, 16)
const prod3 = new producto (3, "Remera Manga Cortas Nike", "Remera", "Negra, Violeta", "XL, L, M", 4000, 20)
const prod4 = new producto (4, "Remera Manga Cortas Puma", "Remera", "Azul", "L, M, S", 2000, 25)
const prod5 = new producto (5, "Pantalon  Adidas", "Pantalon", "Negro, Blanca", "L, M", 2500, 20)
const prod6 = new producto (6, "Zapatillas Adidas", "Zapatillas", "Rojas, Blancas, Rosa", "44-38", 3500, 17)
const prod7 = new producto (7, "Zapatillas Nike", "Zapatillas", "Amarillo, Rojas", "43-36", 4000, 15)


console.log(prod1.stock)
prod1.restarStock(5)
prod1.restarStock(11)

console.log(prod1.stock)

prod1.sumarStock(20)
console.log(prod1.stock)
prod1.sumarStock(5)
console.log(prod1.stock)

console.log(prod1)
console.log(prod2)

// =====================================
// Aca probe hacer la clase pero para que funciones para que el dueño pueda cargar las cosas con un prompt y un metodo para poner el producto en liquidacion

class producto2 {

    constructor(){
        this.nombre = prompt('Cargar nombre de producto nuevo')
        this.precio = parseInt(prompt('Ingrese el precio del producto nuevo'))
    }

    liquidacion(porcentaje){
        this.precio = this.precio - (this.precio * porcentaje / 100)
    }
}



const prod8 = new producto2
console.log(prod8)
console.log(prod8.precio)


prod8.liquidacion(60)

console.log(prod8.precio)
