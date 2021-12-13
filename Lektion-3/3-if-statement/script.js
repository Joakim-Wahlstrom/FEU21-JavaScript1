// Booleans true/false

let email = 'joakim.wahlstrom@mail.com';

// console.log(email.includes('@')); // true
// console.log(email.includes('12')); // false


// COMPARE STATEMENTS

let number = 13;
let string = '13';

// // påstår att number är samma som 13
// console.log(number == 13); // true
// console.log(number == 20); // false

// // påstår att number INTE är samma som 13
// console.log(number != 13); // false
// console.log(number != 20); // true

// // större än
// console.log(number > 10); // true
// // större eller lika med
// console.log(number >= 13); // true

// // mindre än
// console.log(number < 10); // false
// // mindre eller lika med
// console.log(number <= 13); // true

// //  två = tecken jämför bara värdet
// console.log(number == string);  //true
// // tre = tecken jämför värdet och datatyp
// console.log(number === string); //false

// console.log(string != number);
// console.log(string !== number);

// IF SATSER
if(true) {
  // gör någonting här
  // console.log('true');
}
if(false) {
  // Hoppa över det här
  console.log('false');
}


// let isLoggedin = false;
// isLoggedin = true;

// if(isLoggedin) {
//   console.log('användaren är inloggad');
//   // visa "mina sidor" i navbaren
// }
// if(!isLoggedin) {
//   console.log('användaren är INTE inloggad');
//   // dölj "mina sidor" i navbaren
//   // visa en läng till login sidan
// }

const names = [];
// names.push('Joakim');

if(names.length) {
  console.log('arrayen names är längre än 0');
}

if(string == number) {
  // console.log('påståendet är sant: string == number')
}
if(string === number) {
  console.log('påståendet är falskt: string === number')
}


/* 
  ==    lika med (utan att jämföra datatyp)
  ===   lika med (jämför datatyp)
  <     mindre än
  >     större än
  <=    mindre eller lika med
  >=    större eller lika med
  !     inte


  &&    och
  ||    eller
*/


let st = '15';
let nr = 13;

// console.log(st > nr);
// if(st > nr) {
//   console.log('st är större än nr');
// }
// if(typeof st == typeof nr) {
//   console.log('dom har samma datatyp');
// }
// if(typeof st != typeof nr) {
//   console.log('st är INTE samma typ som nr');
// }

// if(st > nr) {
//   if(typeof st == typeof nr) {
//     console.log('st är större än nr och dom har samma datatyp');
//   }
// }

// if(st > nr && typeof st == typeof nr) {
//   console.log('st är större än nr och dom har samma datatyp');
// }

// if(st > nr || typeof st == typeof nr) {
//   console.log('st är större än nr ELLER dom har samma datatyp')
// }


// if, else if, else

// Bad Practice
let isLoggedin = true;
// if(isLoggedin) {
//   console.log('användaren är inloggad');
//   // visa "mina sidor" i navbaren
// }
// if(!isLoggedin) {
//   console.log('användaren är INTE inloggad');
//   // dölj "mina sidor" i navbaren
//   // visa en läng till login sidan
// }

// Good Practice
// if(isLoggedin) {
//   // Do something
//   console.log('vi är inloggade')
// } else {
//   // Do something else
//   console.log('vi är inte inloggade')
// }


let name = 'Hans';

// if(name == 'Joakim') {
//   console.log('namnet är Joakim');
// }
// if(name == 'Hans') {
//   console.log('namnet är hans')
// }
// if(name == 'Hans') {
//   console.log('namnet är hans')
// }
// if(name == 'Hans') {
//   console.log('namnet är hans')
// }

if(name == 'Joakim') {
  console.log('namnet är Joakim');
} 
else if(name == 'Hans') {
  console.log('namnet är Hans');
} 
else if(name == 'Hans') {
  console.log('namnet är Hans');
} 
else {
  console.log('okänt namn');
}



let value = 12;
if(value === 1) { console.log('värdet är 1') }
else if(value === 2) { console.log('värdet är 2') }
else if(value === 3) { console.log('värdet är 3') }
else if(value === 4) { console.log('värdet är 4') }
else if(value === 5) { console.log('värdet är 5') }
else if(value === 6) { console.log('värdet är 6') }
else if(value === 7) { console.log('värdet är 7') }
else if(value === 8) { console.log('värdet är 8') }
else if(value === 9) { console.log('värdet är 9') }
else if(value === 10) { console.log('värdet är 10') }
else if(value === 11) { console.log('värdet är 11') }
else {console.log('värdet finns inte i if satsen')}




// Ternary operator

let age = 19;

// let drink = age >= 18 ? 'Beer' : 'Coke';

let drink;
if(age >= 18) {
  drink = 'Beer'
} 
else {
  drink = 'Coke'
}

console.log(drink);


{/* <div class={loggedIn? 'd-flex' : 'd-none'}>

</div> */}