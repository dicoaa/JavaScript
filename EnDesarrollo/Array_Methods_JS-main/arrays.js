// Métodos en Arrays
const numbers = [1,2,3,4,13,6,10,7,8,9,5,11,12,20,14,15,16,17,18,19];
const letters = ['a','b','c','d','e','f','g','h','i','j'];
const fruits = ['orange','banana','pear','pineapple','strawberry','apple'];
const mixed = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j', 10];
const products = [
    { name: 'Leche', price: 2.5 },
    { name: 'Huevos', price: 1.5 },
    { name: 'Pan', price: 1.5 },
    { name: 'Agua', price: 3.5 },
    { name: 'Carne', price: 5 },
    { name: 'Lechuga', price: 1.5 },
];

const dimension_array =()=> {
  // Recordemos que una cosa es la dimensión y otra el index del array
  console.log(numbers.length);
}

const ordenar_array =()=> {
  // Ordenar un array
  // console.table(numbers.sort());
  // Los array ordenados se muestran en orden ascendente pero de manera alfabética
  // console.table(fruits.sort());
  // ¿Qué pasa cuándo ordenamos un Array Numérico?
  // ordenar un array numérico
  // console.table(numbers.sort((a,b)=> a-b));
  // Bueno, ¿Cómo se ordenaría un array de objetos?
  // Ordenar un array de objetos
  // console.log(products.sort((a,b)=> a.price-b.price));
  // Ordenar un array de objetos por su nombre
  // console.table(products.sort((a,b)=> a.name.localeCompare(b.name)));
  // console.log('Bogotá'.localeCompare('Armenia'));
  // console.log('Armenia'.localeCompare('Bogotá'));
}

const filtrar_array =()=> {
  // Filtrar un array
  console.table(numbers.sort((a,b)=> a-b).filter(number => number > 5));
  console.table(fruits.filter(fruit => fruit.length > 5));
  console.table(mixed.filter(element => typeof element === 'number'));
}

const recorrer_array =()=> {
  // Recorrer un array
  numbers.forEach(number => console.log(number * 2));
  // también puedo jugar con el index
  // numbers.forEach((number,index) => );
}

const mapear_array =()=> {
  // Mapear un array
  const nones = numbers.map(number => number%2===0?'Par':'Impar');  
  const nones2 = numbers.forEach(number => number%2===0?'Par':'Impar');  
  console.table(nones);
  console.table(nones2);
  // console.table(numbers.map(number => number * 2));
  // console.table(fruits.map(fruit => fruit.toUpperCase()));
  // console.log(numbers);
}

const reducir_array=()=> {
  const prueba = [1,2,3,4]
  const total = prueba.reduce((acum,position)=>acum+position,0);
  console.log(total);
}

// dimension_array();
// ordenar_array();
// filtrar_array();
// recorrer_array();
// mapear_array();  
// reducir_array();

