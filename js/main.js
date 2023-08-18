const button = document.querySelector('.submitButton');
const checkBox = document.querySelectorAll('.checkbox__input');
const inputPeso = document.querySelector('.input__nome');

import fleshCardAnimation from "./freshCard.js";

button.addEventListener('click', () => {

    fleshCardAnimation();

    var peso = inputPeso.value;

    checkBox.forEach(element => {
        if(element.checked) {
            var gravidade = element.dataset.gravity;
            var planetName = element.dataset.planetName;
            criaElemento(calculaPeso(peso, gravidade), planetName);
        }
    });
});

function calculaPeso(peso, gravidade) {

    var forcaPeso = Math.round(peso * gravidade);
    return forcaPeso;
}

function criaElemento(pesoFinal, planetaNome) {

    var ul = document.querySelector('.resul-box__lista');
    var li = document.createElement('li');
    var span = document.createElement('span');

    li.classList.add('lista__item');
    span.classList.add('item');

    span.textContent = `Seu peso no planeta ${planetaNome} é: ${pesoFinal}Kg.`

    li.appendChild(span);
    ul.appendChild(li);
}
