// ARRAYS - en lista med ett eller flera värden

// names = [];
// var names = [];
// let names = [];
// const names = [];


// Vi vill hålla samma datatyp innuti en array
// const array = [0, 1, 2, 3, 4, 5, 6, 7];

// Gör inte såhär
// const multiArray = ['12', 12, true, {firstName: 'Joakim'}];

// Det här är också samma
// I det här fallet är datatypen objekt, objekten i sig kan innehålla flera datatyper men man vill hålla dom strukturerade likadant då
const users = [
  {firstName: 'Joakim', lastName: 'Wahlström', age: 34, isActive: true},
  {firstName: 'Jeanette', lastName: 'Wahlström', age: 33, isActive: false},
  {firstName: 'Hans', lastName: 'Wahlström', age: 36, isActive: true}
]

const names = ['Joakim', 'Hans', 'Jeanette'];

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);


// Lägga till i början av en array
names.unshift('Colin');
console.log('Med unshift: ' + names);

// Ta bort i början av en array
names.shift();
console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
console.log('Med push: ' + names);

// Ta bort i slutet av en array
names.pop();
console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt namn';
console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; // Går inte när det är en const

console.log(names.indexOf('Nytt namn')); // get -1 om det inte finns

// const i = names.indexOf('Nytt namn');
// names[i] = 'hej';
names[names.indexOf('Nytt namn')] = 'hej';
console.log(names);