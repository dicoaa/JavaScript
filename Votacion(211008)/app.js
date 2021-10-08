const edad = document.getElementById('ed');
const votar = document.getElementById('btn-enviar');

votar.addEventListener('click', calcular)

function calcular(){
    let edad1 = parseFloat(edad.value)

    if(edad1>18){
        result.textContent = `Ud puede votar, su edad es`;
    } else{
        result.textContent = `Ud es menor de edad, ud no puede votar`;
    }
}