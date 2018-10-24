class Pizza {
  
  constructor(size, crust, crispy){
    this.size = size;
    this.crust = crust;
    this.crispy = crispy;
    this.toppings = ["cheese"];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}
let pizza1 = new Pizza();
// console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("banana peppers");
// console.log(pizza1.toppings);

let pizza2 = new Pizza();
// console.log("pizza 2",pizza2.toppings);
pizza2.addTopping("more cheese");
// console.log("pizza 2",pizza2.toppings);

let pizza3 = new Pizza('Large', 'thin', 'True');
// console.log(pizza3);
pizza3.addTopping('pepperoni');
pizza3.addTopping('Ham');
console.log("pizza 3", pizza3);




