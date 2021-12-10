const animales = [
  {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
  {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
  {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
  {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
  {name:"León", type:"Mamifero", age:12,color:"Café"},
  {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
  {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
  {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
  {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
  {name:"Búho", type:"Ave", age:13,color:"Café"},
  {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
  {name:"Águila", type:"Ave", age:4,color:"Rojo"},
  {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
  {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
  {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
  {name:"Hombre", type:"Mamifero", age:9,color:"Piel"},
];

// Crear grupos de máximo 3 integrantes y realizar los siguientes ejercicios.
// Entregar carpeta comprimida con cada uno de los ejercicios en js.

// 1. Mostrar todos los animales cuya inicial sea la letra B
// 2. Mostrar todos los animales que tengan más de 5 años.
// 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
// 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
// 5. Muestre un Array donde se excluyan los animales de color blanco.

const main = document.getElementById('main')
const template = document.getElementById('template').content
const consola = document.querySelector('.consola')

const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
const boton5 = document.getElementById('boton5')

const fragment = document.createDocumentFragment()

function recorrer(){
  main.innerHTML = "" 
  animales.forEach(data => {
    template.querySelector('#nombre').textContent=data.name 
    template.querySelector('#tipo').textContent=data.type 
    template.querySelector('#edad').textContent=data.age 
    template.querySelector('#color').textContent=data.color 
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    main.appendChild(fragment)
  });
}
recorrer()

boton1.addEventListener('click', letraB);
function letraB(){
  main.innerHTML=""
  consola.innerHTML=''
  animales.forEach(data=>{
    if(data.name[0] === "B"){
      console.log(data)
      template.querySelector('#nombre').textContent=data.name 
      template.querySelector('#tipo').textContent=data.type 
      template.querySelector('#edad').textContent=data.age 
      template.querySelector('#color').textContent=data.color 
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      main.appendChild(fragment)
    }
  })
}

boton2.addEventListener('click', cincoAnios);
function cincoAnios(){
  main.innerHTML=""
  consola.innerHTML=''
  animales.forEach(data=>{
    if(data.age>5){
      template.querySelector('#nombre').textContent=data.name 
      template.querySelector('#tipo').textContent=data.type 
      template.querySelector('#edad').textContent=data.age 
      template.querySelector('#color').textContent=data.color 
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      main.appendChild(fragment)
    }
  })
}

boton3.addEventListener('click', aveDiez);

function aveDiez(){
  main.innerHTML=""
  consola.innerHTML=''
  animales.forEach(data=>{
    if(data.type === "Ave" && data.age>10){
      template.querySelector('#nombre').textContent=data.name 
      template.querySelector('#tipo').textContent=data.type 
      template.querySelector('#edad').textContent=data.age 
      template.querySelector('#color').textContent=data.color 
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      main.appendChild(fragment)
    }
  })
}

// 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.

boton4.addEventListener('click', mamiferoNegro);
function mamiferoNegro(){
  consola.innerHTML=''
  main.innerHTML=''
 
  const h2 = document.createElement('h2');
  h2.setAttribute('id', 'alerta') 
  h2.textContent = "Revisar Consola 2"
  fragment.appendChild(h2)
  consola.appendChild(fragment)
  animales.forEach(data=>{
    if(data.type === "Mamifero" && data.color === "Negro"){
      template.querySelector('#nombre').textContent=data.name 
      template.querySelector('#tipo').textContent=data.type 
      template.querySelector('#edad').textContent=data.age 
      template.querySelector('#color').textContent=data.color 
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      main.appendChild(fragment)
      const arregloMamiferoNegro=[data.name, data.type, data.age, data.color]
      console.log(arregloMamiferoNegro)
    }
  })
}

// 5. Muestre un Array donde se excluyan los animales de color blanco.

boton5.addEventListener('click', noBlancos);
function noBlancos(){
  
  consola.innerHTML=''
  main.innerHTML=''
  
  const h2 = document.createElement('h2');
  h2.setAttribute('id', 'alerta') 
  h2.textContent = "Revisar Consola 2"
  fragment.appendChild(h2)
  consola.appendChild(fragment)
  
  animales.forEach(data=>{
    if(data.color != "Blanco"){
      template.querySelector('#nombre').textContent=data.name 
      template.querySelector('#tipo').textContent=data.type 
      template.querySelector('#edad').textContent=data.age 
      template.querySelector('#color').textContent=data.color 
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      main.appendChild(fragment)
      const arregloNoBlancos=[data.name, data.type, data.age, data.color]
      console.log(arregloNoBlancos)
    }
  })
}