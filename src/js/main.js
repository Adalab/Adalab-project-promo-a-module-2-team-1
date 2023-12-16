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
const dheaderElement = document.querySelector('.js_dheader');
const pantoneElement = document.querySelector('.js_pantone');
const dcolorArrow = document.querySelector('.js_darrow')

const fheaderElement = document.querySelector('.js_fheader');
const formElement = document.querySelector('.js_formlist');
const fArrow = document.querySelector('.js_farrow')

const sheaderElement = document.querySelector('.js_sheader');
const cardElement = document.querySelector('.js_card');
const sArrow = document.querySelector('.js_sarrow')

// EVENTOS

//Flechas
dheaderElement.addEventListener('click', (event) => {
    //dcolorArrow.classList.toggle('desing__rotate')

    formElement.classList.add('stuffed-hidden')
    cardElement.classList.add('share__hidden')
    pantoneElement.classList.remove('desing__hidden')

    fArrow.classList.remove('rotate-stuffed')
    sArrow.classList.remove('rotate-stuffed')
    dcolorArrow.classList.add ('desing__rotate')

});


fheaderElement.addEventListener('click', (event) => {
    
    pantoneElement.classList.add('desing__hidden')
    cardElement.classList.add('share__hidden')
    formElement.classList.remove('stuffed-hidden')

    sArrow.classList.remove('share__rotate')
    dcolorArrow.classList.remove ('desing__rotate')
    fArrow.classList.add('rotate-stuffed')


});

sheaderElement.addEventListener('click', (event) => {
    
    pantoneElement.classList.add('desing__hidden')
    formElement.classList.add('stuffed-hidden')
    cardElement.classList.remove('share__hidden')

    dcolorArrow.classList.remove ('desing__rotate')
    fArrow.classList.remove('rotate-stuffed')
    sArrow.classList.add('share__rotate')

});



// buttonCreateElement.addEventListener('click', (event) => {
//     TwitterElement.classList.toggle('share__hidden')
// });


// Tarjeta Preview
inputName.addEventListener('input', (event) => {
    card.name = event.currentTarget.value;
    upDatePreview();
   
});
inputJob.addEventListener('input', (event) => {
    card.job = event.currentTarget.value;
    upDatePreview();
    
    
});
inputEmail.addEventListener('input', (event) => {
    card.email = event.currentTarget.value;
    upDatePreview();
    
});
inputPhone.addEventListener('input', (event) => {
    card.phone = event.currentTarget.value;
    upDatePreview();    
});
inputLinkedin.addEventListener('input', (event) => {
    card.linkedin = event.currentTarget.value;
    upDatePreview();    
});
inputGithub.addEventListener('input', (event) => {
    card.github = event.currentTarget.value;
    upDatePreview();    
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

function upDatePreview () {
     if (card.name === "" ) 
    {cardName.innerHTML = 'Nombre Apellido'}
    else {cardName.innerHTML = card.name;}
    
    if (card.job === "" ) 
    {cardJob.innerHTML = 'Front-end developer'}
    else {cardJob.innerHTML = card.job;}
    cardEmail.href = 'mailto:' + card.email;
    cardMobile.href = 'tel:' + card.phone;
    cardLinkedin.href = 'https://' + card.linkedin;
    cardGithub.href = 'https://' + card.github;
 }
'use strict';

 const palette1 = document.querySelector(".js_palette1")
 const palette2 = document.querySelector(".js_palette2")
 const palette3 = document.querySelector(".js_palette3")
 const previewCard = document.querySelector(".js__previewCard")

palette1.addEventListener('input',(event) => {
    card.palette = 1;
    previewCard.classList.remove("palette1","palette2","palette3")
    previewCard.classList.add("palette1")
})

palette2.addEventListener('input',(event) => {
    card.palette = 2;
    previewCard.classList.remove("palette1","palette2","palette3")
    previewCard.classList.add("palette2")
})

palette3.addEventListener('input',(event) => {
    card.palette = 3;
    previewCard.classList.remove("palette1","palette2","palette3")
    previewCard.classList.add("palette3")
})

palette1.checked = true