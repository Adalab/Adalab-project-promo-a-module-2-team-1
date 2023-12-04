'use strict';
// OBJETOS
const card = {
    palette: '',
    name: '',
    job: '',
    photo:'',
    email:'',
    phone:'',
    linkedin:'',
    github:''
};
// QUERYSELECTOR
// Form
const form = document.querySelector('.js_form');
const inputName = document.querySelector('.js_name');
const inputJob = document.querySelector('.js_job');
const inputEmail = document.querySelector('.js_email');
const inputPhone = document.querySelector('.js_tlf');
const inputLinkedin = document.querySelector('.js_linkedin');
const inputGithub = document.querySelector('.js_github');

// Card
const resetPreviewButton = document.querySelector('.js-preview-reset');
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

// Arrow
const ddownElement = document.querySelector('.js_ddown');
const pantoneElement = document.querySelector('.js_pantone');

const sdownElement = document.querySelector('.js_sdown');
const cardElement = document.querySelector('.js_card');

// EVENTOS

//Flechas
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

// buttonCreateElement.addEventListener('click', (event) => {
//     TwitterElement.classList.toggle('share__hidden')
// });


// Tarjeta Preview
inputName.addEventListener('input', (event) => {
    card.name = event.currentTarget.value;
    cardName.innerHTML = card.name;
});
inputJob.addEventListener('input', (event) => {
    card.job = event.currentTarget.value;
    cardJob.innerHTML = card.job;
});
inputEmail.addEventListener('input', (event) => {
    card.email = event.currentTarget.value;
    cardEmail.href = 'mailto:' + card.email;
});
inputPhone.addEventListener('input', (event) => {
    card.phone = event.currentTarget.value;
    cardMobile.href = 'tel:' + card.phone;
});
inputLinkedin.addEventListener('input', (event) => {
    card.linkedin = event.currentTarget.value;
    cardLinkedin.href = 'https://' + card.linkedin;
});
inputGithub.addEventListener('input', (event) => {
    card.linkedin = event.currentTarget.value;
    cardGithub.href = 'https://' + card.github;
});

resetPreviewButton.addEventListener('click', (event) => {
    cardName.innerHTML = 'Nombre Apellido'
    cardJob.innerHTML = 'Front-end developer'
    cardMobile.href = ''
    cardEmail.href = ''
    cardLinkedin.href = ''
    cardGithub.href = ''
    form.reset()
});


