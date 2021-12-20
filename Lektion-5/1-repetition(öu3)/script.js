const printName = (name) => {
  console.log('Hello ' + name);
}
// printName('Joakim');

for(let i = 0; i < 5; i++) {
  // console.log(i)
  // printName('Joakim')
}


// const numberToColor = (nr) => {
//   let answer;
//   if(nr < 0){
//     // return 'black'
//     answer = 'black';
//   } else {

//     switch(true) {
//       case nr < 13:
//         // return 'white'
//         answer = 'white'
//         break;
//       case nr < 19:
//         // return 'green'
//         answer = 'green'
//         break;
//       case nr < 26:
//         // return 'red'
//         answer = 'red'
//         break;
//       case nr < 100:
//         // return 'blue'
//         answer = 'blue'
//         break;
//       default:
//         // return 'black'
//         answer = 'black'
//         break;
//     }
//   }
//   console.log(answer)
//   // return answer;
// }

const numberToColor = (nr) => {
  if(nr >= 0 && nr <= 12) {
    console.log('white')
  }
  else if(nr >= 13 && nr <= 18) {
    console.log('green')
  }
  else if(nr >= 19 && nr <= 25) {
    console.log('red')
  }
  else if(nr >= 26 && nr <= 99) {
    console.log('blue')
  }
  else {
    console.log('black')
  }
}

// numberToColor(12);
// numberToColor(18);
// numberToColor(25);
// numberToColor(99);
// numberToColor(89234);
// numberToColor(-12);


const namesArray = ['Joakim', 'Hans', 'Tommy', 'Jeanette'];
// const namesDIV = document.querySelector('#names');

// namesArray.forEach(name => {
//   namesDIV.innerHTML += `<p>${name}</p>`
// })



// let namesDIV = document.createElement('div');
// namesDIV.id = 'names';

// document.body.appendChild(namesDIV);

// namesArray.forEach(name => {
//   let p = document.createElement('p');
//   p.innerText = name;
//   namesDIV.appendChild(p);
// })

const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(input.value);
  input.value = '';
})

// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(input.value);
//   input.value = '';
// })