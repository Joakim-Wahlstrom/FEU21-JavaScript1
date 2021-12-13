let color = 'black';

// En dålig lösning
// if(color === 'black') {
//   console.log('color is black');
// }
// else if(color === 'blue') {
//   console.log('color is blue');
// }
// else if(color === 'orange') {
//   console.log('color is orange');
// }
// else if(color === 'white') {
//   console.log('color is white');
// }
// else if(color === 'red') {
//   console.log('color is red');
// }
// else {
//   console.log('color unknown!')
// }


// SWITCH

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'orange':
    console.log('color is orange');
    break;  
  case 'white':
    console.log('color is white');
    break;
  case 'black':
    console.log('color is black');
    console.log('hej');
    break;
  default:
    console.log('color unknown!');
}

// const action = {type: addToCart, payload: cartItem}

// switch(action.type) {
//   case addToCart:
//     shoppingCart.push(payload);
//     break;
// }

let nr = 2

// jobbar som att det är 3 ===
switch(nr) {
  case '2':
    console.log('det är "2"');
    break;
  
  case 2:
    console.log('det är 2');
}