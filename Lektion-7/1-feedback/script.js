const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');


const validateText = (input) => {
  if(input.value.trim() === '') { 
    setError(input, 'Name can\'t be empty')
  }
  else if(input.value.trim().length < 2) {
    setError(input, 'Name must be atleast 2 chars long')
  }
  else {
    setSuccess(input)
  }
}

const validateEmail = email => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.value.trim() === '') {
    setError(email, 'You need to enter a email address');
  } 
  else if(!regEx.test(email.value)) {
    setError(email, 'Email address is not valid');
  }
  else {
    setSuccess(email)
  }
}

const setError = (input, textMessage) => {
  const parent = input.parentElement;
  parent.classList.add('is-invalid');
  parent.classList.remove('is-valid');
  parent.querySelector('.invalid-input').innerText = textMessage;
}

const setSuccess = input => {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid');
  parent.classList.add('is-valid');
}



form.addEventListener('submit', e => {
  e.preventDefault();

  validateText(firstName);
  validateText(lastName);
  validateEmail(email);

  // Skapa en användare om valideringen går igenom

})