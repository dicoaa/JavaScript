const titulo = document.getElementById('titulo')
const numero = document.getElementById('numero')

const numeroAleatoreo = Math.round(Math.random() * 50)
console.log(numeroAleatoreo)

numero.addEventListener('keyup', numeroMagico)


function numeroMagico(event){

    if(event.keyCode == '13'){

        numeroEnFuncion = numero.value
        
        if (numeroEnFuncion==numeroAleatoreo) {
            titulo.textContent = "el numero es correcto"
        } else if (numeroEnFuncion > numeroAleatoreo) {
            titulo.textContent = "El numero es menor"
        } else {
            titulo.textContent = "El numero es mayor"
        }
    }


}