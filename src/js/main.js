'use strict';

console.log('>> Ready :)');


const ddownElement = document.querySelector('.js_ddown');
const pantoneElement = document.querySelector('.js_pantone');

const sdownElement = document.querySelector('.js_sdown');
const cardElement = document.querySelector('.js_card');

const buttonCreateElement = document.querySelector('.js_button-create');
const TwitterElement = document.querySelector('.js_twitter');




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


buttonCreateElement.addEventListener('click', (event) => {
    TwitterElement.classList.toggle('share__hidden')
});



// CARD
const resetPreviewButton = document.querySelector('.js-preview-reset');
const card = document.querySelector('.js-card');
const cardBorder = document.querySelector('.js-card-border');
const cardName = document.querySelector('.js-card-name');
const cardJob = document.querySelector('.js-card-job');
const cardImage = document.querySelector('.js-card-image');
const cardItem = document.querySelector('.js-card-item');
const cardIcon = document.querySelector('.js-card-icon');
const cardMobile = document.querySelector('.js-card-mobile');
const cardEmail = document.querySelector('.js-card-email');
const cardLinkedin = document.querySelector('.js-card-linkedin');
const cardGithub = document.querySelector('.js-card-github');





