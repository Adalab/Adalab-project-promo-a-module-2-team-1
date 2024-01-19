"use strict";

const cardFromLS = localStorage.getItem('card');
const cardFromLSasObject = JSON.parse(cardFromLS);

if( cardFromLS !== null ) {

  console.log(cardFromLS);

  card.palette = cardFromLSasObject.palette;
  card.name = cardFromLSasObject.name;
  card.job = cardFromLSasObject.job;
  card.photo = cardFromLSasObject.photo;
  card.email = cardFromLSasObject.email;
  card.phone = cardFromLSasObject.phone;
  card.linkedin = cardFromLSasObject.linkedin;
  card.github = cardFromLSasObject.github;

  // Render card data from LS
  cardName.innerHTML = cardFromLSasObject.name;
  cardJob.innerHTML = cardFromLSasObject.job;
  profileImage.style.backgroundImage = `url(${cardFromLSasObject.photo})`;
  profilePreview.style.backgroundImage = `url(${cardFromLSasObject.photo})`;
  cardMobile.href = cardFromLSasObject.phone;
  cardEmail.href = cardFromLSasObject.email;
  cardLinkedin.href = cardFromLSasObject.linkedin;
  cardGithub.href = cardFromLSasObject.github;

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


}

else {
  form.reset();
  upDatePreview ();
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
  palette1.addEventListener('input', handleInput)
  palette2.addEventListener('input', handleInput)
  palette3.addEventListener('input', handleInput)

