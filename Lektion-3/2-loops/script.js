// LOOPAR

const namesArray = ['Joakim', 'Jeanette', 'Hans', 'Tommy', 'Jack', 'nisse'];
const usersArray = [
  { name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true },
  { name: 'Jeanette', email: 'jeanette@mail.com', age: 34, status: false },
  { name: 'Hans', email: 'hans@mail.com', age: 36, status: false },
  { name: 'Tommy', email: 'tommy@mail.com', age: 38, status: false },
  { name: 'Jack', email: 'jack@mail.com', age: 6, status: true },
  { name: 'Nisse', email: 'nisse@mail.com', age: 352, status: false }
]

// console.log(namesArray[0]);


// FOR loopar - loopar ett givet antal gånger

// for (let i = 0 ; i < 5; i++) {
//   console.log(i);
//   console.log(namesArray[i])
// }

// // Loopar igenom hela en array
// for(let i= 0; i < namesArray.length; i++) {
//   console.log(i + ' - ' + namesArray[i]);
// }


// FOR OF loopar - loopar igenom en hel array

// for(let name of namesArray) {
//   // console.log(name)
// }

// for (let user of usersArray) {
//   console.log(user.name)
// }



// WHILE loopar
// kom ihåg astt inkrementera i, annars blir det en oändlig loop

// let i = 1;

// console.log(i < 5);

// while( i < 5 ) {
//   console.log('while: ' + i);
//   i++;
// }

// console.log(i < 5);
// console.log('i är: ' + i);

// // DO WHILE
// // kommer alltid att köras minst en gång

// do {
//   console.log('do while: ' + i);
//   i++;
// } while(i < 0);

// console.log('i är ' + i);


