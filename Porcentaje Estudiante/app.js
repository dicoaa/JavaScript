const numero1 = document.getElementById('nota1');
const numero2 = document.getElementById('nota2');
const nota3 = document.getElementById('notaNecesaria');
const calularTotal = document.querySelector('#btn-calcular');

calularTotal.addEventListener('click', calcular);

function calcular(){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let valorNecesario = 3.5;
    let multiplicacionNota1 = num1 * 0.25;
    let multiplicacionNota2 = num2 * 0.35;
    let suma = multiplicacionNota1 + multiplicacionNota2;
    let resta = valorNecesario - suma;    
    notaNecesaria.textContent = `Su tercera nota debe ser: ${resta / 0.4}`;

}