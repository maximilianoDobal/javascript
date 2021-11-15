// =======================

// base de productos

class producto {

    // == CONSTRUCTOR ==
    constructor(id, nombre, marca, tipo, colores, precio, stock, img, cantAVender) {

        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.colores = colores;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cantAVender = cantAVender;

    }

    restarStock(cantidad) {

        this.stock = this.stock - cantidad
    }
    sumarStock(cantidad) {
        this.stock += cantidad
    }

}

const productos = [

    new producto(1, "Urban", "Specialized", "Urbanas", ["Negra", "Blanca"], 3000, 20, "./imgs/bici1.jpg", 1),
    new producto(2, "Old Style", "Canyon", "Urbana", ["Negra", "Blanca",], 3500, 16, "./imgs/bici2.jpg", 1),
    new producto(3, "Limitless", "Specialized", "BMX", ["Roja", "Violeta", "Rosa", "Amarrillo"], 4000, 20, "./imgs/bici3.jpg", 1),
    new producto(4, "Dark Night", "Scott", "BMX", ["Negra"], 2000, 25, "./imgs/bici4.jpg", 1),
    new producto(5, "Limit Push", "BMC", "Ruta", ["Marron", "Blanca", "Violeta"], 2500, 20, "./imgs/bici5.jpg", 1),

]

productos.push(new producto(6, "Old Vibe", "Giant", "Urbanas", ["Roja", "Azul", "Negra"], 4000, 15, "./imgs/bici6.jpg", 1))


const filtrado = productos.filter((prod) => prod.marca === "Specialized")



// ================ USO DE JQUERY =================

let variableCambiante = true

$("#darkMode-btn").click(() => {
    $("body").toggleClass("modo-oscuro")
    $(".btn-warning-darkmode").toggleClass("btn-outline-warning")
    $(".btn-warning-darkmode").toggleClass("btn-warning")
    $("header").toggleClass("modo-oscuro")
    $(".equipo").toggleClass("modo-oscuro")
    $(".nav-item--dark").toggleClass("navbar__dark")
    $(".dark__title").toggleClass("dark__title--background")
    $(".dark__title").toggleClass("bg--grandiant")
    $("#btn-enviar").toggleClass("btn-warning1")


    if (variableCambiante === true) {
        $(".logo-dark").attr("src", "./imgs/logo2Dark.png")
        $(".svg__gradient--1").attr("stop-color", "#1f1d1c")
        $(".svg__gradient--2").attr("stop-color", "#1f1d1c")
        $(".equipo").css("background", "linear-gradient(to right, #1f1d1c, #1f1d1c)")
        $("header").css("box-shadow", "0px 5px 18px #000000")
        variableCambiante = !variableCambiante
    } else {
        $(".logo-dark").attr("src", "./imgs/logo2.png")
        $(".svg__gradient--1").attr("stop-color", "#ca6a09")
        $(".svg__gradient--2").attr("stop-color", "#ffe259")
        $(".equipo").css("background", "linear-gradient(to right, #ca6a09, #ffe259)")
        variableCambiante = !variableCambiante
    }


})

// =================================
const contenedor = document.getElementById("container__productos")
contenedor.innerHTML = `<h2 class="text-center">Nuestras bicicletas</h2>`


const productos__padre = document.createElement("div")
productos__padre.classList.add("productos--padre", "text-center", "mt-5")
contenedor.append(productos__padre)

const contenedorCarrito = document.getElementById('contenedorCarrito')
const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

const carrito = []


productos.forEach((producto) => {

    // generador de tarjetas

    const productos__hijo = document.createElement("div")
    productos__hijo.classList.add("productos--hijo", "align-items-center", "wow", "animate__flip")
    productos__hijo.setAttribute("data-aos", "fade-right")
    productos__hijo.setAttribute("data-aos-duration", "1500")
    productos__hijo.setAttribute("data-aos-offset", "250")
    productos__hijo.setAttribute("data-aos-anchor-placement", "top-center")
    

    productos__hijo.innerHTML = `
    <h3 class="bg--grandiant px-3 dark__title">${producto.nombre}</h3>
    <img src="${producto.img}" alt="" class="img-fluid">
    <p>Lorem ipsum dolor ${producto.marca} sit amet consectetur adipisicing elit. Ex consequatur </p>
    <p>Precio: $${producto.precio}</p>
    <button type="button" class="btn btn-warning btn-warning-darkmode" id="agregar${producto.id}">Agregar al carrito</button>    
    
    `
    productos__padre.append(productos__hijo)


    // evento para agregar al carrito 
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {

        agregarCarrito(producto.id)

    })

})



// funcion para agregar al carrito 
const agregarCarrito = (prodId) => {

    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "tostada",
    }).showToast();

    actualizarCarrito()
}


// actualizador de carrito 
const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ''

    const carrito2 = new Set(carrito)
    const carritoDefinitivo = Array.from(carrito2)
    console.log(carritoDefinitivo)
    // generador de productos en carrito
    carritoDefinitivo.forEach((prod) => {
        const li = document.createElement('li')
        li.classList.add('list-group-item', 'list-group-item-action')
        li.setAttribute('aria-current', 'true')
        li.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 nombreProdCarrito">${prod.nombre}</h5>
        <button class="botonRojo" id="eliminar${prod.id}"><i class="bi bi-trash"></i></button>
        </div>
        <p class="mb-1">${prod.marca}</p>
        <div class="d-flex w-100 justify-content-between">
        <p>Cantidad: <button id="restarCantidad${prod.id}" class="botonCantidad me-2">-</button><span id="cantidadContador${prod.id}">1</span><button id="sumarCantidad${prod.id}" class="botonCantidad ms-2">+</button></p>
        <p>Precio unit: $${prod.precio}</p>
        </div>
        <p id="subPrecio${prod.id}">Precio: $${prod.precio}</p>
        `
        contenedorCarrito.append(li)

        // boton de eliminar del carrito 
        const boton = document.getElementById(`eliminar${prod.id}`)
        boton.addEventListener('click', () => {
            eliminarDelCarrito(prod.id)
        })

        // botones de cantidad del carrito
        let restarCantidad = document.getElementById(`restarCantidad${prod.id}`)
        let sumarCantidad = document.getElementById(`sumarCantidad${prod.id}`)
        let cantidadContador = document.getElementById(`cantidadContador${prod.id}`)
        let acumulador = 1

        restarCantidad.addEventListener('click', () => {
            // funcionamiento de boton 
            if (acumulador > 1) {
                acumulador--
            }
            cantidadContador.innerText = acumulador
            prod.cantAVender = acumulador

            // subtotal de item 
            const subPrecio = document.getElementById(`subPrecio${prod.id}`)
            let subPrecioAcumulador = 0
            subPrecioAcumulador = acumulador * prod.precio
            subPrecio.innerHTML = `Precio: $${subPrecioAcumulador}`
            cuentaFinal()
        })

        sumarCantidad.addEventListener('click', () => {
            // funcionamiento de boton 
            acumulador++
            cantidadContador.innerText = acumulador
            prod.cantAVender = acumulador

            // subtotal de item 
            const subPrecio = document.getElementById(`subPrecio${prod.id}`)
            let subPrecioAcumulador = 0
            subPrecioAcumulador = acumulador * prod.precio
            subPrecio.innerHTML = `Precio: $${subPrecioAcumulador}`
            cuentaFinal()
        })

    })

    // contador carrito 
    contadorCarrito.innerHTML = carritoDefinitivo.length
    if (contadorCarrito === 0) {
        contadorCarrito.classList.add('invisible')
    } else {
        contadorCarrito.classList.remove('invisible')
    }

    // precio total del carrito 

    const cuentaFinal = () => {
        precioTotal.innerText = `$${carritoDefinitivo.reduce((acc, prod) => acc + prod.precio * prod.cantAVender, 0)}`
    }
    cuentaFinal()
}

// funcion para eliminar del carrito 
const eliminarDelCarrito = (prodId) => {

    const carrito2 = new Set(carrito)
    const carritoDefinitivo = Array.from(carrito2)

    const item = carritoDefinitivo.find((prod) => prod.id === prodId)
    const indice = carritoDefinitivo.indexOf(item)
    do {
        carrito.splice(indice, 1)
    } while (carrito.find((prod) => prod.id === prodId));


    actualizarCarrito()
}

// =================== Formulario ======================



const formulario = document.getElementById('formulario')
const tilde = document.getElementById('tilde')
const cruz = document.getElementById('cruz')

const baseDeMails = []

formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    const mailNews = document.getElementsByClassName('mailNews')[0]
    const btnEnviar = document.getElementById('btn-enviar')


    if (mailNews.value === "") {
        cruz.classList.remove('desaparecer')
        tilde.classList.add('desaparecer')
        btnEnviar.classList.add('btn-danger')
        btnEnviar.classList.remove('btn-warning', 'btn-success')


    } else {
        tilde.classList.remove('desaparecer')
        cruz.classList.add('desaparecer')
        btnEnviar.classList.add('btn-success')
        btnEnviar.classList.remove('btn-danger', 'btn-warning')
        btnEnviar.innerText = 'Enviado'

        const usuario = {
            mail: mailNews.value
        }

        baseDeMails.push(usuario)
        localStorage.setItem('baseDeMails', JSON.stringify(baseDeMails))

        mailNews.value = ""

    }

    mailNews.addEventListener('input', () => {
        btnEnviar.classList.remove('btn-danger', 'btn-success')
        btnEnviar.classList.add('btn-warning')
        btnEnviar.innerText = 'Enviar'
        tilde.classList.add('desaparecer')
        cruz.classList.add('desaparecer')
    })

    console.log(baseDeMails)





})

