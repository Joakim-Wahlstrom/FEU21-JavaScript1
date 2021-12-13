// SCOPE

let age = 34;   // global scope
// let age = 50;

  if(true) {
    let age = 50; // local scope
    let fName = 'Joakim';
    // console.log('inne i 1a kodblocket', age, fName);


    if(true) {
      let age = 100; // local scope
      // console.log('inne i kodblock 1.2', age, fName);
      var global = 'var har global scope';   //global scope
    }

  }

  if(true) {
    let age = 66;
    let fName = 'Jeanette';
    // console.log('inne i 2a kodblocket', age, fName);
  }

// console.log('utanför något block', age);
// console.log('utanför något block', global);
// console.log('utanför något block', fName);





// FUNCTIONS
// till för att underlätta så vi slipper repetera kod


// hoisting - hissas till toppen
// hej();

// deklarera en funktion
// function hej() {
//   console.log('hej på dig');
// }

// const greet = function() {
//   console.log('hur är läget?')
// }

// kör en funktion
// hej();
// greet();

// const test = function() {
//   // return 'testar 1234';
//   console.log('test');
// }

// const string = test();
// console.log(string);
// console.log(test());

// const names = ['Joakim', 'Hans'];
// const name = names.pop()

let firstName = 'Joakim'

const greet = function(name) {
  console.log(`Hej ${name} hur är läget?`)
  return `Hej ${name} hur är läget?`
}

// greet(firstName);
// greet('Hans');
// greet('Jeanette');

const func1 = function(firstName, lastName) {
  let _fullName = `${firstName} ${lastName}`;
  console.log(_fullName);
  return _fullName;
}

// func1('Joakim', 'Wahlström');
// func1('Hans', 'Mattin-Lassei');

const func2 = function(firstName = 'John', lastName = 'Doe') {
  if(typeof firstName != 'string') {
    return;
  }

  let _fullName = `${firstName} ${lastName}`;
  console.log(_fullName);
  return _fullName;

}

// func2(3, 'hej');
// func2('kj', 'hej');
// func2();
// func2('Joakim');

const calc = function(num1 = 0, num2 = 0) {
  let sum = +num1 + +num2
  return sum
}

let sum = calc(10, 15);
// sum = calc(4, 'hej');
// sum = calc();
sum = calc('3', '10');

// console.log(sum);

const input = document.querySelector('#input');
// console.log(input.value)
// console.log(typeof input.value)


// ARROW FUNCTIONS

// const calc2 = (num1 = 0, num2 = 0) => {
//   // let sum = +num1 + +num2
//   return sum
// }

const calc2 = (num1, num2) => num1 + num2;

// console.log(calc2(3, 6))

// const greet2 = name => `Hej ${name}.`;
const greet2 = () => `Hejsan.`;

// console.log(greet2('Hans'))

// console.log(this)

// En arrow function bider inte om nyckelordet "this"



// Methods - funktioner som hör ihop med ett objekt

let myName = 'Joakim';
let upper = myName.toUpperCase();

let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  // arrow: () => {
  //   console.log('arrow function ', this);
  // },
  // function: function() {
  //   console.log('regular function ', this);
  // }
}

// user.arrow()
// user.function()

// console.log(user.fullName())



// CALLBACK FUNCTIONS

// Exempel på callback function
// let names = ['Joakim', 'Hans', 'Tommy'];

// names.forEach(name => {
//   console.log(name)
// })

// cb = callbackFunction
// const minFunktion = (cb) => {
//   let val = 25;
//   cb(val);
// }

// minFunktion(value => {
//   console.log(value)
// })


const func5 = (nr1 = 0, nr2 = 0, cb) => {
  let sum = nr1 + nr2

  cb(sum)
}

let sumOfAllResults = 0;

func5(1, 1, result => {
  sumOfAllResults += result;
})
func5(1,1, res => {
  console.log('res ', res);
  sumOfAllResults += res;
})

console.log(sumOfAllResults);
