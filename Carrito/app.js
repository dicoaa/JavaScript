const cards = document.getElementById('cards')
// Items son los elementos del carrito
const items = document.getElementById('items')
// Usamos el .content para acceder a los elementos
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
// Variable que contendra todo lo del carrito
let carrito = {}
// dataset es similar a textContent

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    // Preguntar si hay algo en el carrito para que no se borre al recargar la pagina, (la palabra carrito es una llave q nos inventamos)
    // Si existe algo en local storage, con esto se llenara el carrito
    if (localStorage.getItem('carrito')){
        // parse porque se debe parsear
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})
// capturar id del boton para hacer eventDElegation
cards.addEventListener('click', e => {
    addCarrito(e)
})


// Llamado a botones de aumentar y disminuir en el carrito
items.addEventListener('click', e => {
    btnAccion(e)
})


const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

// Se necesita la data para pintarla
const pintarCards = data => {
    // cuando tenemos la data, debemos recorrerla
    data.forEach(producto => {
        // En el h5 va a poner el titulo del objeto respectivo
        // Paso 1 Template
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        // Paso 2 Clonacion
        const clone = templateCard.cloneNode(true)

        // Paso 3 Pasarlo al Fragment
        fragment.appendChild(clone)
    })
    // Paso 4 adicionar fragment a donde iran las cards
    cards.appendChild(fragment) 
}

// si detecta algun boton haga esto:
const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

// Funcion que manipulara el carrito
const setCarrito = objeto => {
        const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    // preguntamos si ya tenemos algun articulo en el carrito con hasOwnProperty
    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    // empujar objeto al carrito, (con los tres PushSubscriptionOptions, se esta haciendo una copia de los valores a producto, esto se llama spread Operator)
    carrito[producto.id] = {...producto}
    pintarCarrito()
}

const pintarCarrito = () => {
    // console.log(carrito)
    // Se hace esto para que no se repitan los pedidos del carrito
    items.innerHTML = ''
    // object values se hace porque no se pueden modificar los objetos directamente
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
    // para guardar la informacion con la llave carrito, stringlify para volver a tener la info como coleccion de objetos
    localStorage.setItem('carrito', JSON.stringify(carrito))

}

// Si se vacia el carrito, se pintara esta info
const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito Vacío - Comienza a comprar!</th>
        `
        return
    }

    // values sirve para utilizar todas las funcionalidades del array (carrito)
    // Para reducir y adicionar a la cantidad
    // Acomulador funciona similar a un ciclo, sirve para sumar la cantidad 
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    // console.log(nCantidad)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment) 

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        // Se borra el array del carrito
        carrito = {}
        // se llama esta funcin para que sepa que ya no hay ningun elemento en ella
        pintarCarrito()
    })
}

const btnAccion = e => {
    console.log(e.target)
    // Se acede al boton de aumentar
    if (e.target.classList.contains('btn-info')){
        // Se accede al id del carrito
        // carrito[e.target.dataset.id]
        // console.log(carrito[e.target.dataset.id])
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        // Esto va a ser una copia del carrito
        carrito[e.target.dataset.id] = {...producto}
        // Se pinta nuevamente el carrito para que se actualice
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0 ){
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }
    e.stopPropagation()
}













