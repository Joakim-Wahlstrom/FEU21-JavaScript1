import User from './models/UserModel.js'

const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#output');

const users = [];

const createUser = (firstName, lastName, email) => {
  const user = new User(firstName, lastName, email);
  users.push(user);

  output.insertAdjacentHTML('beforeend', newUser(user))

}

const newUser = user => {
  return `
  <div class="card text-center p-3 mb-3 animate">
    <h3>${user.firstName} ${user.lastName}</h3>
    <small>${user.email}</small>
  </div>
  `
}



form.addEventListener('submit', e => {
  e.preventDefault();

  if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && email.value.trim() !== '') {
    createUser(firstName.value, lastName.value, email.value)
    // form.reset()
  }
})