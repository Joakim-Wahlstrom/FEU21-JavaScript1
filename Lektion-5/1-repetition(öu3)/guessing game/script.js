const form = document.querySelector('#form');
const input = document.querySelector('#input');
const feedback = document.querySelector('#feedback');

const randomNr = Math.floor(Math.random() * 100);

let counter = 0;
// console.log(randomNr);


const printFeedbackToDOM = (string, correct) => {
  if(!correct)
    return feedback.innerText = string;

  feedback.innerText = string + ' Number of guesses: ' + counter
}

const checkGuess = (value) => {
  if(randomNr > value) {
    printFeedbackToDOM('To low', false);
  }
  else if(randomNr < value) {
    printFeedbackToDOM('To high', false);
  }
  else {
    printFeedbackToDOM('You guessed the number!', true);
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  counter ++;
  checkGuess(input.value);
})

