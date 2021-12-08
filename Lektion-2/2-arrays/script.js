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
// console.log('Med unshift: ' + names);

// Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
// console.log('Med push: ' + names);

// Ta bort i slutet av en array
names.pop();
// console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt namn';
// console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; // Går inte när det är en const

// Hämta ut vilken index plats någonting har i en array
// names.indexOf('Nytt namn'); // ger -1 om det inte finns

// const i = names.indexOf('Nytt namn');
// names[i] = 'hej';
names[names.indexOf('Nytt namn')] = 'hej';
// console.log(names);


// delete - tar bort värdet på en specifik plats i en array men inte platsen
// delete names[1];
// delete names[names.indexOf('hej')];

// console.log(names);

// .splice() - tar bort och / eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1
names.splice(1, 0, 'Colin', 'Hans'); // tar bort 0 och lägger till Colin & Hans
names.splice(1, 2, 'Jack'); // tar bort 2 från index plats 1 och lägger till Jack
// console.log(names);
names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Haitem');

// console.log(names);

// Hur lång är en array
// console.log(names.length);

const arrayToAdd = ['Colin', 'Hans']

// Lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Hans'])); // görs bara i consolen (modifierar inte det ursprungliga värdet)
// const newNames = names.concat(['Colin', 'Hans']) // returnerar en ny kombinerad array

// Spread operator

// names.splice(names.length -1, 0, arrayToAdd);
names.splice(names.length -1, 0, ...arrayToAdd);
// names.splice(0, names.length, ...arrayToAdd);
// console.log(names);


const obj = {
  fName: 'Joakim',
  lName: 'Wahlström'
}


const obj2 = {
  email: 'joakim@mail.com',
  obj: {
    fName: 'Joakim',
    lName: 'Wahlström'
  }
}

// ...obj
const obj3 = {
  ...obj,
  email: 'joakim@mail.com',
}
// const obj3 = {
//   email: 'joakim@mail.com',
//   fName: 'Joakim',
//   lName: 'Wahlström'
// }

// console.log(obj2);
// console.log(obj3);


const newNames = ['Ca', 'Bb', '1a', '2a', 'aa', 'bb'];
const numbers = [5, 6, 7, 8, 2, 1, 9, 10, 11, 12, 30, 40];

console.log(names);

// names.sort();   // Sortera i bokstavsordning
// console.log(names);
// names.reverse();   //vänder på arrayen så först blir sist osv.
// console.log(names);

// names.sort().reverse();   // Sortera i bokstavsordning baklänges
// console.log(names);

newNames.sort();
console.log(newNames);

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);