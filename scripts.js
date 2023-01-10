'use strict'
const form = document.getElementById('form')
const username = document.getElementById('username')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password =  document.getElementById('password')

// Show error Function
function showError (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small =  formControl.querySelector('small')
  small.innerText = message
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check Input Details
function checkDetails (inputValue) {
// let isRequired = false

  inputValue.forEach(input => {
    // let isRequired = false;
    if(input.value === '') {
      showError(input, `${getFieldName(input)} is required`);
      // isRequired = true
    } else {
      showSuccess(input)
    }
  })
  // return isRequired
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
     showError(
       input,
       `${getFieldName(input)} must be less ${max} characters`
     );
  } else {
    showSuccess(input)
  }
}

 //Check email valid 
 function checkValidEmail (input) {
   let emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
       if (emailValid.test(input.value)) {
         showSuccess(input)
       } else {
         showError(input, 'Email is not valid')
       }
 }

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);}


//Event Listener 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkDetails([username, password, lastname, email])
  checkLength(username, 5, 15)
  checkLength(password, 8, 15)
  checkValidEmail(email)
})