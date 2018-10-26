class Employee {
  constructor(name, title,salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates =[];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfpeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
    while(currentEmployee.boss){
      currentEmployee = currentEmployee.boss;
      numberOfPeople++ ;
    }
    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}
const ada = new Employee("Ada", "CEO", 30000000 );
const craig = new Employee("Craig", "VP software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const simone = new Employee("Simone", " Software", 100000);
const ali = new Employee("Ali", " Software", 200000);
const florida = new Employee("Florida", " Marketing", 100000);
const david = new Employee("David", " Marketing", 200000);
const brian = new Employee("Brian", " Marketing", 150000);
const karla = new Employee("Karla", " Retail", 100000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

// console.log(florida.hasSameBoss(ali));
// console.log(craig.boss);
// console.log(craig.numberOfSubordinates);

console.log(craig.numberOfpeopleToCEO);
// console.log(ada.numberOfSubordinates);
