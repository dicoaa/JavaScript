const input2 = document.getElementById('input1')
const bton1 = document.querySelector('#bton')

const box1 = document.querySelector('.box')
const parag = document.getElementById('presentation')
const paragra = document.getElementById('welcoming')

bton1.addEventListener('click', show)

function show() {
    const showName = input2.value

    box1.style.opacity = 1

    paragra.textContent = `Bienvenid@`
    parag.textContent = `${showName}`
    
    

}