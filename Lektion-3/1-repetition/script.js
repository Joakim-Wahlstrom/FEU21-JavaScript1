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

family.sort();

console.log(family);

family.splice(family.indexOf('Joakim') + 1, 0, 'Hans', 'Tommy');

console.log(family)



let familyMember = family.pop();

// console.log(familyMember);
family.unshift(familyMember);

console.log(family);



let counter = 0;
family.forEach(() => {
  counter++;
  console.log(counter);
})

console.log(family.length);