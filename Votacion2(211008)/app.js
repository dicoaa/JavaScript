const nombre = document.getElementById('nomm')
const dia = document.getElementById('diaa')
const mes = document.getElementById('mess')
const anio = document.getElementById('anioo')

envio.addEventListener('click', calcular)

function calcular(){
    let dia1 = parseFloat(dia.value)
    let mes1 = parseFloat(mes.value)
    let anio1 = parseFloat(anio.value)
  
    if(2021-anio1>17){
        result.textContent = `Ud es mayor de edad, puede votar`
    }
    else{
        result.textContent = `Ud es menor de edad`
    }
}

