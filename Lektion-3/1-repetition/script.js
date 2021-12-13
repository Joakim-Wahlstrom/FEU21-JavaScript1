// ARRAYS
// En lista med ett eller flera värden

const array = [
  { firstName: 'Joakim', lastName: 'Wahlström', age: 34 },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36 },
  { firstName: 'Jeanette', lastName: 'Wahlström', age: 34 }
];

// const family = ['Joakim', 'Jeanette', 'Liam', 'Wille', 'Jack', 'Colin', 'Vince'];


// Hämta ut information från en array
// console.log(array[2]);
// console.log(array[2].firstName);

// Lägg till i början
// array.unshift({ firstName: 'Tommy', lastName: 'Mattin-Lassei', age: 38 });

const tommy = { 
  firstName: 'Tommy', 
  lastName: 'Mattin-Lassei', 
  age: 38 
};
array.unshift(tommy);

// Tar bort i början
array.shift();

// lägga till i slutet
array.push(tommy);

// Ta bort i slutet
// array.pop();

// console.log(array);


// Hämta index platsen
// console.log(family.indexOf('Liam'));
// console.log(array.indexOf(tommy));


// hitta ett objekt i en array

const indexOfTommy = array.findIndex((person) => {
  return person.firstName == 'Hans';
})

// console.log(indexOfTommy);


// Hitta ett specifikt objekt
const person = array.find((p) => {
  return p.firstName == 'Nisse';
})

// person.firstName = 'Nisse';

// console.log(person);


const family = ['Joakim', 'Jeanette', 'Liam', 'Wille', 'Jack', 'Colin', 'Vince'];

family.sort().reverse();

// console.log(family);

family.splice(family.indexOf('Joakim') + 1, 0, 'Hans', 'Tommy');

// console.log(family)



let familyMember = family.pop();

// console.log(familyMember);
family.unshift(familyMember);

// console.log(family);



let counter = 0;
family.forEach(() => {
  counter++;
  // console.log(counter);
})

// console.log(family.length);

const greetings = family.map(name => {
  return 'Hejsan ' + name;
})

greetings.forEach(greet => {
  // console.log(greet);
})

// let selected = array.map(person => {
//   return person.lastName == 'Wahlström';
// })

// let selected = array.filter(person => {
//   return person.lastName == 'Wahlström';
// })

// let selected = array
// .filter(person => person.lastName == 'Wahlström')
// .map(person => person.firstName)
// .sort();

// let selected = array.filter(person => {
//   return person.lastName == 'Wahlström';
// })
// .map(person => {
//   return person.firstName;
// })
// .sort();

// console.log(selected);

// const shoppingList = ['mjölk', 'ägg', 'bröd'];

// console.log(shoppingList.includes('smör'));


// SET

const shoppingList = new Set();
shoppingList.add('mjölk');
shoppingList.add('ägg');
shoppingList.add('smör');
shoppingList.add('ägg');
shoppingList.add('ägg');
shoppingList.add('ägg');
shoppingList.add('ägg');
shoppingList.add('bröd');


console.log(shoppingList);

// const list = [];
shoppingList.forEach(item => {
  // console.log(item);
  // list.push(item);
})

// const list = Array.from(shoppingList);
const list = [...shoppingList];

console.log(list);


