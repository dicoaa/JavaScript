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

const main = document.getElementById("main")
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
  pintarCards()
})

const pintarCards = () => {
  // console.log("hola")
  animales.forEach(element => {
      template.getElementById('nombre').textContent = element.name
      template.getElementById('tipo').textContent = element.type 
      template.getElementById('edad').textContent = element.age 
      template.getElementById('colour').textContent = element.color 
      
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
  })
  main.appendChild(fragment)
}
