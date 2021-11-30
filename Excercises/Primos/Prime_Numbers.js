// Array de números de 1 a n
// Retorne un Array de números primos desde 1 hasta n.

let array = [1,2,3,4,5,6,7,8,9,10]
let primos = []

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0){
        primos.push(i)
    }
}

console.log(primos)