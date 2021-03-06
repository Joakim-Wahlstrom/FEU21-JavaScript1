// DOM - Document Object Model

// document.body.innerText = '<h1>Detta är en rubrik</h1>';

// GÖR INTE SÅHÄR
// result.innerHTML += '<h1>Detta är en rubrik</h1>';

// const results = document.getElementById('result');
// const test = document.getElementsByClassName('entilldiv');
const test = document.querySelector('.entilldiv');
const results = document.querySelector('#result');


const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 35,
  address: {
    street: 'en gata',
    nr: 12,
    postalCode: '72345',
    city: 'Västerås'
  },
  isActive: true,
  phoneNumbers: [
    '076-0254387',
    '070-2347564'
  ]
}

const div = document.createElement('div')
div.innerText = 'En ny div'
results.appendChild(div)


results.innerHTML += '<h1>Detta är en rubrik</h1>';
results.innerHTML += '<p>'+ user.firstName +'</p>';
results.innerHTML += `<p>Hej jag heter ${user.firstName}</p>`;


test.innerHTML = '<h2>test</h2>';
test.style = 'color: green; background-color: #333'
// console.log(test);

console.log(test.id)

console.log(results);

