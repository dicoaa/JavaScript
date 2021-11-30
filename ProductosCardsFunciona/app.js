const main = document.querySelector('#main');

create_card();

function create_card(){
    const card = document.createElement('div')
    const tittle_card=document.createElement('h2')
    const img_card = document.createElement('img')
    const p_card = document.createElement('p')
    const btn_card = document.createElement('button')
    card.classList.add('card')
    card.setAttribute('id', 'card')
    tittle_card.textContent = 'Titulo'
    img_card.setAttribute('src', 'images/descarga.jpg')
    p_card.textContent = 'Descripcion'
    btn_card.textContent = 'Agregar'

    card.appendChild(tittle_card)
    card.appendChild(img_card)
    card.appendChild(p_card)
    card.appendChild(btn_card)
    main.appendChild(card)
}

function recorrer (cantidad){
    for (let i = 0; i < cantidad; i++) {
        create_card(i);
    }
}

recorrer(15)