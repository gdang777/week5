class Shark {
   constructor(name){
    this.name = name;
    this.position = {x: 0, y: 0};
    console.log("This", this);
  }
}
const finn = new Shark('Finn');