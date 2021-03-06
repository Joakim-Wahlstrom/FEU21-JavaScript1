// CONSOLE

// Felsökning om någonting går fel
// let app;
// let app;

// console.log('vanligt meddelande');
// console.warn('varnings meddelande');
// console.error('felmeddelande');

// DOM
// document.body.innerText = '<h1>Hejsan</h1>';
// document.body.innerHTML = '<h1>Hejsan</h1>';
// document.body.createElement('div').innerText = 'hej'; // ger ett felmeddelande i consolen.
// document.body.appendChild(document.createElement('div'));

const results = document.querySelector('#results');
// const input = document.querySelector('.input-class');
// const input = document.getElementsByName('input-name')[0];
// const input = document.getElementById('input-id');

// let res = document.querySelector('#input-id').id;


// res = input.value;
// results.innerText = res;

// console.log(input);
// console.log(res);


// VARIABLES

// name = 'Joakim';           // Deklarerar någonting globalt. GÖR INTE SÅHÄR
// var name = 'Joakim';       // Deklarerar någonting globalt. UNDVIK DET HÄR
// let name = 'Joakim';       // Deklarerar någonting lokalt i ett scope. GÖR DET HÄR
// const name = 'Joakim';     // Deklarerar någonting skrivskyddat lokalt. GÖR DET HÄR

// name = 'Joakim';

// console.log(name);


// DATATYPER

/* 
  string    - text
  number    - siffror, heltal, decimaltal
  boolean   - true/false
  null      - tomt, (manuellt)
  undefined - tomt / odefinierat (automatiskt)
  object    - innehåller ett eller flera andra värden som key:value pairs
  array     - en lista på ett eller flera värden
*/

// String - text

// let name = 'Joakim';
// let age = '35';

// let name = "Joakim";
// let name = 'Joakim';

// let name = `Joakim`;    // när vi vill använda placeholders till variabler (template literal)

// let text = "Använder \"citat\" och enkel 'fnuttar' och variabeln " + name;
// let text = 'Använder "citat" och enkel \'fnuttar\' och variabeln ' + name;
// let text = `Använder "citat" och EnKel 'fnuttar' och varIabeln ${name}`;

// results.innerText = text;
// console.log(text);

let email = 'joakim.wahlstrom@utb.ecutbildning.se';
let number = 3;
let num1 = '23';

// console.log(text.length);
// console.log(text.indexOf('och'));
// console.log(text.lastIndexOf('och'));
// console.log(text.replace('och', '&'));
// console.log(text.replaceAll('och', '&'));
// console.log(text.toUpperCase());
// console.log(text.toLocaleUpperCase());
// console.log(text.toLowerCase());
// console.log(text.concat(name));
// console.log(text.concat(' hej'));
// console.log(text.trim());
// console.log(text.split(' '));
// console.log(email.split('@'));

// console.log(number);
// console.log(number.toString());

// console.log(num1);
// console.log(parseInt(num1));
// console.log(+num1);

// console.log(text);


// NUMBER - till för nummer av olika slag, heltal och decimaltal

// let value = 1;
// value = 'hej';

// console.log(value);

// JS (.js)     let value = 1;      DET GÅR ATT GÖRA value = 'hej';
// C# (.cs)     int value = 1;      DET GÅR DÅ INTE ATT GÖRA value = 'hej';
// TS (.ts)     value: number = 1;  DET GÅR DÅ INTE ATT GÖRA value = 'hej';


// console.log(1 + '5');
// console.log(2 + 5 * 3);
// console.log(11 % 2);
// console.log(1e+6);
// console.log(1e-6);

// console.log(Number(true));
// console.log(Number(false));

// let value = 5;

// value += 2;
// value++;

// console.log(value += 2); // Manipulerar ursprungsvärdet
// console.log(value)


// console.log(Number(10));
// console.log(Number('10'));
// console.log(Number('10.23'));
// console.log(Number('10,23'));
// console.log(Number('Joakim'));
// console.log(Number('                        10.23'));
// console.log(Number('10 23'));

// console.log(parseInt('23h'));
// console.log(parseInt('23   haasd  234'));


// console.log(Math.PI);
// console.log(Math.sqrt(4));
// console.log(Math.random() * 100);

// function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min +1)) + min;
//   return num;
// }

// console.log(random(1, 25));


// OBJECT

const user = {
  firstName: 'Joakim',
  account: {
    email: 'joakim@mail.com',
    password: 'BytMig123'
  }
};

user.lastName = 'Wahlström';
user.account.password = '12345';

// let q = new URLSearchParams(window.location.search).get('q')

// console.log(q)
// console.log(user.firstName);
// console.log(user[q]);


// JSON JavaScript Object Notation
// json = '{"firstName": "Joakim", "lastName": "Wahlström"}'

const json = JSON.stringify(user);
const js = JSON.parse('{"firstName": "Joakim", "lastName": "Wahlström"}');

// console.log(user);
// console.log(json);
// console.log(js);

// ta bort ett värde
// delete user.account;
// console.log(user)


// destructure
const { firstName, lastName } = user;
const { firstName: fName, lastName: lName } = js;

let text = `Hej jag heter ${firstName} ${lastName}`;
let text3 = `Hej jag heter ${fName} ${lName}`;
let text2 = `Hej jag heter ${user.firstName} ${user.lastName}`;
console.log(text);
console.log(text2);
console.log(text3);