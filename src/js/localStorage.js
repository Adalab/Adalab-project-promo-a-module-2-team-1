"use strict";

const cardFromLS = localStorage.getItem('card');
const cardFromLSasObject = JSON.parse(cardFromLS);

if( cardFromLS !== null ) {

  console.log(cardFromLS);

  if (card.palette === "" ) {
    card.palette = 1;
  }
  else {
    card.palette = cardFromLSasObject.palette;
  }

  card.name = cardFromLSasObject.name;
  card.job = cardFromLSasObject.job;
  card.photo = cardFromLSasObject.photo;
  card.email = cardFromLSasObject.email;
  card.phone = cardFromLSasObject.phone;
  card.linkedin = cardFromLSasObject.linkedin;
  card.github = cardFromLSasObject.github;

  // Render card data from LS
  cardName.innerHTML = cardFromLSasObject.name;
  if (cardFromLSasObject.name === "" ) {
    cardName.innerHTML = 'Nombre Apellido'
  }
  else {
    cardName.innerHTML = cardFromLSasObject.name;
  }
  if (cardFromLSasObject.job === "" ) {
    cardJob.innerHTML = 'Front-end alien'
  }
  else {
    cardJob.innerHTML = cardFromLSasObject.job ;
  }
  if (cardFromLSasObject.photo) {
    profileImage.style.backgroundImage = `url(${cardFromLSasObject.photo})`;
  } 
  else {
    profileImage.style.backgroundImage = `url('./images/portrait.jpg')`;
  }
  profilePreview.style.backgroundImage = `url(${cardFromLSasObject.photo})`;
  cardMobile.href = 'tel:' + cardFromLSasObject.phone;
  cardEmail.href = 'mailto:' + cardFromLSasObject.email;
  cardLinkedin.href = 'https://' + cardFromLSasObject.linkedin;
  cardGithub.href = 'https://github.com/' + cardFromLSasObject.github;

  // render input data
  inputName.value = cardFromLSasObject.name;
  inputJob.value = cardFromLSasObject.job;
  inputEmail.value = cardFromLSasObject.email;
  inputPhone.value = cardFromLSasObject.phone;
  inputLinkedin.value = cardFromLSasObject.linkedin;
  inputGithub.value = cardFromLSasObject.github;

  if(cardFromLSasObject.palette === 1){
    palette1.checked = true;
  }
  else if(cardFromLSasObject.palette === 2){
    palette2.checked = true;
  }
  else if(cardFromLSasObject.palette === 3){
   palette3.checked = true;
  }
  else {
    palette1.checked = true;
  }

}

else {
  form.reset();
  upDatePreview ();
  cardName.innerHTML = 'Nombre Apellido';
  palette1.checked = true;
 
}


// Set card data in LocalStorage
function setInLocalStorage() {
  localStorage.setItem('card', JSON.stringify(card));
}