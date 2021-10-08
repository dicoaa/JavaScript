const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result'); 
const sum = document.querySelector('#btn-sum');
const subs = document.querySelector('#btn-subs');
const multi = document.querySelector('#btn-multi');
const di = document.querySelector('#btn-di');


sum.addEventListener('click', sum_operation);

function sum_operation(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1+num2}`;
    result.style.color = 'green';
}

subs.addEventListener('click', subs_operation);

function subs_operation(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1-num2}`;
    result.style.color = 'green';
}

multi.addEventListener('click', multi_operation);

function multi_operation(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    result.textContent = `Su resultado es: ${num1*num2}`;
    result.style.color = 'green';
}

di.addEventListener('click', di_operation);

function di_operation(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);

    if(num2==0){
        result.textContent = `La division entre cero no esta permitida`; 
    } else {
        result.textContent = `El resultado es ${num1/num2}`;
    }
}