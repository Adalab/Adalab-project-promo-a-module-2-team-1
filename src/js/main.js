'use strict';

console.log('>> Ready :)');


const ddownElement = document.querySelector('.js_ddown');
const pantoneElement = document.querySelector('.js_pantone');

const sdownElement = document.querySelector('.js_sdown');
const cardElement = document.querySelector('.js_card');


ddownElement.addEventListener('click', (event) => {
    ddownElement.classList.toggle('desing__rotate')
});
ddownElement.addEventListener('click', (event) => {
    pantoneElement.classList.toggle('desing__hidden')
});


sdownElement.addEventListener('click', (event) => {
    sdownElement.classList.toggle('share__rotate')
});


sdownElement.addEventListener('click', (event) => {
    cardElement.classList.toggle('share__hidden')
});








