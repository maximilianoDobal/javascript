// =======================


class producto {

    // == CONSTRUCTOR ==
    constructor (id, nombre, marca, tipo, colores, precio, stock, img){

        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.colores = colores;
        this.precio = precio;
        this.stock = stock;
        this.img = img;

    }

    restarStock (cantidad) {
        
        this.stock = this.stock-cantidad
    }
    sumarStock(cantidad){
        this.stock+=cantidad
    }
    
}

const productos = [

    new producto (1, "Urban", "Specialized", "Urbanas", ["Negra", "Blanca"], 3000, 20, "./imgs/bici1.jpg"),
    new producto (2, "Old Style", "Canyon", "Urbana", ["Negra", "Blanca", ], 3500, 16, "./imgs/bici2.jpg"),
    new producto (3, "Limitless", "Specialized", "BMX", ["Roja", "Violeta", "Rosa", "Amarrillo"], 4000, 20, "./imgs/bici3.jpg"),
    new producto (4, "Dark Night", "Scott", "BMX", ["Negra"], 2000, 25, "./imgs/bici4.jpg"),
    new producto (5, "Limit Push", "BMC", "Ruta", ["Marron", "Blanca", "Violeta"], 2500, 20, "./imgs/bici5.jpg"),

]

productos.push(new producto (6, "old Vibe", "Giant", "Urbanas", ["Roja", "Azul", "Negra"], 4000, 15, "./imgs/bici6.jpg"))


const filtrado = productos.filter((prod) => prod.marca === "Specialized")

console.log(productos)
console.log(filtrado)



// // ===============================


// class usuario{

//     // CONSTRUCTOR
//     constructor () {

//         this.usuario = prompt("Ingrese su Usuario")
//         this.consumidorFinal = prompt("¿Usted es consumidor final?").toLowerCase()
        
//         while (this.consumidorFinal !== "si" && this.consumidorFinal !== "no") {
//             this.consumidorFinal = prompt("Por favor decir si es Consumidor Final").toLowerCase()
//         }
        
//     }
    
// }

// const usuario1 = new usuario 

// let iva = 0

// if (usuario1.consumidorFinal === "si"){
//     iva = 21
// } else {
//     iva = 0
// }

// usuario1.iva = iva


// console.log(usuario1)
// console.log(iva)


// ====================================



const contenedor = document.getElementById("container__productos")
console.log(contenedor)
contenedor.innerHTML = `<h2 class="text-center">Nuestras bicicletas</h2>`


const productos__padre = document.createElement("div")
productos__padre.classList.add("productos--padre", "text-center", "mt-5")



productos.forEach((prod) => {
    
    const productos__hijo = document.createElement("div")
    productos__hijo.classList.add("productos--hijo", "align-items-center")
    productos__hijo.id = `${prod.id}`

    productos__hijo.innerHTML = `
    <h3 class="bg--grandiant px-3">${prod.nombre}</h3>
    <img src="${prod.img}" alt="" class="img-fluid">
    <p>Lorem ipsum dolor ${prod.marca}sit amet consectetur adipisicing elit. Ex consequatur </p>
    <p>Precio: ${prod.precio}</p>
    <button type="button" class="btn btn-warning">Agregar al carrito</button>    
    
    `    
    
    productos__padre.append(productos__hijo)
})

contenedor.append(productos__padre)

