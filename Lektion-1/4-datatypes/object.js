/* OBJECT
  -innehåller ett eller flera värden 

  skrivs som key:value par
  Vi kommer att arbeta med JSON (JavaScript Object Notation)

  person = {}
  var person = {}
  let person = {}
  const person = {}

  JS Objekt
  const person = {
    firstName: 'Joakim',
    lastName: 'Wahlström',
  }

  const person = { firstName: 'Joakim, lastName: 'Wahlström' }

  JSON Objekt
  {
    "firstName": "Joakim",
    "lastName": "Wahlström"
  }
*/

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

// console.log(user);
// console.log(user.firstName);
// console.log(user.address.city);

// user = {
//   email: 'joakim@mail.com'
// }

user.firstName = 'Hans';
user.email = 'joakim@mail.com';

let key = 'lastName';
key = 'age';

// console.log(user.key);

// console.log(user);
// console.log(user['lastName']);
// console.log(user[key]);

