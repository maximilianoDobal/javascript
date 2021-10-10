// ================================

let iva = 1
let consumidor = respuestaCorrecta(prompt('¿Usted es consumidor final?').toLowerCase())

function respuestaCorrecta(a) {

    if (a === 'si'){
        alert('Usted declaro que es Consumidor Final')
        iva = 1.21
        return console.log (iva)
    } if (a === 'no') {
        alert('Usted declaro que no es Consumidor Final')
        return console.log (iva)
    } else {
        while (a !== 'si') {
            if (a === 'no'){
                alert('Usted declaro que no es Consumidor Final')
                return console.log (iva)
            } else{
                a = prompt('Por favor repita si usted es Consumidor Final').toLowerCase()
            }
        }
        if (a === 'si'){
            alert('Usted declaro que es Consumidor Final')
            iva = 1.21
            return console.log (iva)
        }
        console.log(iva)
    }
    
}

let valorItem1 = 1000
let valorItem2 = 2000
let valorItem3 = 4599

let item1 = 'chocolate'
let item2 = 'caramelo'
let item3 = 'chupetin'

let contador = 0

const sumar = (a,b,c) => a+b+c
const multiplicar = (a,b) => a * b

function cantidad(a) {
    a = parseInt(prompt('cuantos productos del '+a+' queres?'))
    return a
}

item1 = cantidad(item1)
item2 = cantidad(item2)
item3 = cantidad(item3)


let totalItem1 = multiplicar(item1, valorItem1)
let totalItem2 = multiplicar(item2, valorItem2)
let totalItem3 = multiplicar(item3, valorItem3)

let subTotal = sumar(totalItem1, totalItem2, totalItem3)
let totalFinal = multiplicar(subTotal, iva)

console.log('Su total a pagar es: $' + totalFinal)

