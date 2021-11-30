// Retorne un array con los números pares del 1 al n.tomados de un array
let resultado = document.getElementById('resultado')
let array = [1,2,3,4,5,6,7,8,9,10]
let pares = []
let pares2 = []

// for (let i = 0; i < array.length; i++) {
//     if(i % 2 == 0){
//         pares.push(i)
//     }
// }

// console.log("Los numeros pares son: " + pares)
// console.log(array)
//resultado.textContent = pares

function par(){
    for (let i = 0; i < array.length; i++) {
        if(i % 2 == 0){
            pares2.push(i)
        }
    }
    return pares2
}

console.log(par())

resultado.textContent = pares2

