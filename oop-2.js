
//Person is the superclass of Student class and mentor class 
class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
    }

  bio() {
    return `My name is ${this.name}, my email is ${this.email} here's my quirky fact :${this.quirkyFact}`;
  }
}

class Student extends Person {
  enroll(cohort){
   this.cohort = cohort; 
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }
}
// let newPerson = new Person('Gaurav', 'Loves to fly', 'gaurav@celltrader.ca')
// console.log(newPerson);
// console.log(newPerson.bio());

let newStudent = new Student('Gaurav', 'Loves to fly', 'gaurav@celltrader.ca');
console.log(newStudent);
newStudent.enroll('sept24');
console.log(newStudent.cohort);
console.log(newStudent.bio());

newMentor = new Mentor('Sam', 'english accent', 'sam@sam.ca')
console.log(newMentor);
console.log(newMentor.bio());
newMentor.goOffShift();
console.log(newMentor.onShift);
// newMentor.onShift;
