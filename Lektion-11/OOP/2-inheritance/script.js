/* 
    4 pelare inom Objektorienterad programmering (OOP)

    *Encapsulation
    *Inheritance
    *Polymorphism
    *Abstraction


    <= ES5
    *Inheritance

    => ES6
    *Encapsulation
    *Polymorphism

*/


// Inheritance - Arv mellan klasser


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  displayName() {
    // return `${this.firstName} ${this.lastName}`
    console.log(`${this.firstName} ${this.lastName}`);
  }

}



class Teacher extends Person {
  constructor(firstName, lastName, skills) {
    super(firstName, lastName)
    this.skills = skills
    this.teacherId = Date.now().toString()
  }

  displaySkills() {
    this.skills.forEach(skill => {
      console.log(skill);  
    })
  }

}

class Student extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName)
    this.studentId = Date.now().toString()
  }

  displayName() {
    console.log('student - ');
    super.displayName()
  }
}



const t1 = new Teacher('Joakim', 'Wahlström', ['Javascript', 'HTML', 'CSS', 'React'])
// console.log(t1.displayName());
// t1.displaySkills()

const person = new Person('nisse', 'andresson')
// console.log(person.displayName());
// person.displaySkills()


const s1 = new Student('John', 'Fors')

// console.log(s1.displayName());
// console.log(s1);
// s1.displaySkills()

s1.displayName()