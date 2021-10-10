// ================================

let iva = 0
let consumidor = respuestaCorrecta(prompt('¿Usted es consumidor final?').toLowerCase())

function respuestaCorrecta(a) {

    if (a === 'si'){
        alert('Usted declaro que es Consumidor Final')
        iva = 21
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
            iva = 21
            return console.log (iva)
        }
        console.log(iva)
    }
    
}

let valorItem1 = 1000
let valorItem2 = 2000
let valorItem3 = 4599

let item1 = 'Chocolate'
let item2 = 'Caramelo'
let item3 = 'Chupetin'



const sumar = (a,b,c) => a+b+c
const multiplicar = (a,b) => a * b


function cantidad(a) {
    let contador = 0
    let item = a

    do {        
        a = parseInt(prompt('¿Qué cantidad de '+ item +' queres?'))
        while (a < 0){
            a = parseInt(prompt('Pusiste un numero negativo. Por favor poner 0 si no se desea ningun '+ item))
            contador = a
        }
        contador = a
    } while (isNaN(a))
    return contador

}

let cantItem1 = cantidad(item1)
let cantItem2 = cantidad(item2)
let cantItem3 = cantidad(item3)


let totalItem1 = multiplicar(cantItem1, valorItem1)
let totalItem2 = multiplicar(cantItem2, valorItem2)
let totalItem3 = multiplicar(cantItem3, valorItem3)

let subTotal = sumar(totalItem1, totalItem2, totalItem3)
let totalFinal = multiplicar(subTotal, iva)/100 + subTotal

alert("************ Checkout ************" + "\n" + "\n" + item1 + " x" + cantItem1 + "        $" +  totalItem1 + "\n" + item2 + " x" + cantItem2 + "         $" +  totalItem2 + "\n" + item3 + " x" + cantItem3 + "          $" +  totalItem3 + "\n" + "\n" + "SubTotal                 $" + subTotal + "\n" + "IVA                              " + iva +"%"+ "\n" + "\n" + "Su total a pagar es: $" + totalFinal)