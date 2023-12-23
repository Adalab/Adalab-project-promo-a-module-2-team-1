"use strict";


const cardFromLS = localStorage.getItem('card');

const cardFromLSasObject = JSON.parse(cardFromLS);

if( cardFromLS !== null ) {

  console.log(cardFromLS);

  inputName.value = cardFromLSasObject.name;
  inputJob.value = cardFromLSasObject.job;
  profileImage.src = cardFromLSasObject.image;
  inputEmail.value = cardFromLSasObject.email;
  inputPhone.value = cardFromLSasObject.phone;
  inputLinkedin.value = cardFromLSasObject.linkedin;
  inputGithub.value = cardFromLSasObject.github;
}




function handleInput(event) {

  console.log(event.currentTarget.id);

  const prop = event.currentTarget.id;

  card[prop] = event.currentTarget.value;

  localStorage.setItem('card', JSON.stringify(card));

  console.log(card);
}

  inputName.addEventListener('input', handleInput)
  inputJob.addEventListener('input', handleInput)
  profileImage.addEventListener('input', handleInput)
  inputEmail.addEventListener('input', handleInput)
  inputPhone.addEventListener('input', handleInput)
  inputLinkedin.addEventListener('input', handleInput)
  inputGithub.addEventListener('input', handleInput)


