const URL = "https://dog.ceo/api/breeds/image/random"

const boton1 = document.getElementById("boton1") 
const boton3 = document.getElementById("boton3")
const boton6 = document.getElementById("boton6")
const boton9 = document.getElementById("boton9")
const fragment = document.createDocumentFragment

const main = document.getElementById("main")
const templateCard = document.getElementById("templateCard").content
const contenedor = document.getElementById("contenedor")

document.addEventListener('DOMContentLoaded', () => {
    fetchApi()
})

function fetchApi(){
    fetch(URL)
    .then(response => response.json())
    .then(caninos => {
        main.innerHTML = ''
        const caninos = characters.message
        seleccionarOpcion(dogs)
    })
}



