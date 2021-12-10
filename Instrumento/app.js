const URL = "https://rickandmortyapi.com/api/character/?page=1"
const main = document.getElementById('main')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const btnImprimir = document.querySelector('.btn-info')
const btnLimpiar = document.querySelector('.btn-danger')

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        
        const res = await fetch(URL)
        const data = await res.json()
        const arreglo = data.results
        
        pintarCards(arreglo)
        
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = arreglo => {
    console.log("hola")
    arreglo.forEach(element => {
        template.querySelector('h3').textContent = element.name
        template.querySelector('p').textContent = element.gender 
        template.querySelector('img').src=element.image
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    
    })
    main.appendChild(fragment)   
}

btnLimpiar.addEventListener('click', () =>{
    console.log('me diste click')
    main.innerHTML = ""
})

btnImprimir.addEventListener('click', () =>{
    console.log('me diste click limpiar')
    fetchData()
})

