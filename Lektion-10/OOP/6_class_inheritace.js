class Animal {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  makeSound() {
    return `${this.name} makes a generic sound!` 
  }
}

class Dog extends Animal {
  constructor(name, gender, age) {
    super(name, gender)
    this.age = age
  }
}

class Cat extends Animal {

  spinning() {
    return `${this.name} spins!`
  }
}


const dog2 = new Dog('hund', 'kille', 43)

console.log(dog2);


const dog = new Dog('doggo', 'tjej', 3)
const cat = new Cat('catti')

console.log(dog);
console.log(dog.makeSound());
console.log(dog.age);

console.log(cat.makeSound())
console.log(cat.spinning())
