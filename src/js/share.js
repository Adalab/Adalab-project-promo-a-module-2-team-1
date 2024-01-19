'use strict';

const createButton = document.querySelector('.js_button-create');
const shareResponse = document.querySelector('.js_shareResponse');
const shareLink = document.querySelector('.js_shareLink');
const shareError = document.querySelector('.js_shareError');

function handlClickCreate(event){
    event.preventDefault();
    
fetch('https://dev.adalab.es/api/card/',
{
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(card)
})
.then( response => response.json() )
.then( dataResponse => {
 console.log(dataResponse);

 if(dataResponse.success){
    shareResponse.classList.remove('share__hidden');
    shareLink.href = dataResponse.cardURL;
    shareLink.innerHTML = dataResponse.cardURL;
 }
 else{
    shareError.classList.remove('share__hidden')
    shareError.innerHTML = 'Por favor rellene todos los campos'
 }
});
}

createButton.addEventListener('click',handlClickCreate);