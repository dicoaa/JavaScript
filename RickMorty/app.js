const URL = 'https://rickandmortyapi.com/api/character/'                    // URL
const main = document.getElementById('main')                                // donde ira el card
const templateContenedor = document.getElementById('templateContenedor').content  // todo el contenido del card
const select = document.querySelector('.select')                            // el select 
const fragment = document.createDocumentFragment()                          // crear el fragment

const fetchAPI = () => {                                                    // funcion Fetch
    fetch(URL)
    .then(res => res.json())
    .then(data=>{
        main.innerHTML=""
        const arreglo = data.results
        seleccionarPersonaje(arreglo) // que me lleve al seleccionar
        printPagination(data.info)
    })
}

fetchAPI()

const seleccionarPersonaje= arreglo=>{
    arreglo.forEach(data=>{                             //0. crear forEach
        const option= document.createElement('option')  //se trae la variable; para que se hace esto, porque no se hizo getElementById
        option.setAttribute('value', data.name)         // 2. Poner el nombre en la etiqueta valor
        option.textContent=data.name                    //3. se le pone nombre
        fragment.appendChild(option)                    // 4. se adiciona al fragment
    })
    select.appendChild(fragment)                       // 5. el fragment se adiciona al select 
    crearTarjeta(arreglo)                              
    select.addEventListener('change', function(){       
        crearTarjeta(arreglo)
    })
        
}
// evento aplicado a selecte
// cada vez q el select cambie envie objeto


const crearTarjeta=arreglo=>{
    if(select.value=="todos"){                                                  //condicion
        main.innerHTML=""                                                       
        arreglo.forEach(arreglo =>{                                             //0. crear forEach
        templateContenedor.querySelector('.imagenes').src=arreglo.image
        templateContenedor.querySelector('.titulos').textContent=arreglo.name   //1. Adicionar lo que se necesita obtener
        templateContenedor.querySelector('.informaciones').textContent=arreglo.gender
        const clone = templateContenedor.cloneNode(true)                        // 2. clonar
        fragment.appendChild(clone)                                             // 3. add al fragment
        main.appendChild(fragment)                                              // 4. add al main
        })
        
        
        
    }else { 
        main.innerHTML=""                                                               
        const arregloNuevo = arreglo.filter(indice => indice.name === select.value)           // arreglo ,hacer otro arreglo
        templateContenedor.querySelector('.imagenes').src=arregloNuevo[0].image    
        templateContenedor.querySelector('.titulos').textContent=arregloNuevo[0].name           // crear info que se ecesita
        templateContenedor.querySelector('.informaciones').textContent=arregloNuevo[0].gender
        const clone = templateContenedor.cloneNode(true)                                        //clonar
        fragment.appendChild(clone)                                                             //add fragment
        main.appendChild(fragment)                                                              // add al main
    }

}

const printPagination = (info) => {

    let preDisable = info.prev == null ? 'disabled' : ''
    let nextDisable = info.next == null ? 'disabled' : ''

    let html = `<li class="page-item ${preDisable}" ><a class="page-link" onclick="getData('${info.prev}')" >Previous</a></li>`
    html += `<li class="page-item" ${nextDisable}><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById('pagination').innerHTML = html

}


