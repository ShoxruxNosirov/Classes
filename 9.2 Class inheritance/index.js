class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}
let animal = new Animal("My animal");

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

class Animal1 {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    // ...
  }
  class Rabbit1 extends Animal1 {
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
    // ...
  }
  rabbit = new Rabbit1("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10

  class Animal2 {
    showName() {  // instead of this.name = 'animal'
      alert('animal');
    }
    constructor() {
      this.showName(); // instead of alert(this.name);
    }
  }
  class Rabbit2 extends Animal2 {
    showName() {
      alert('rabbit');
    }
  }
  new Animal2(); // animal
  new Rabbit2(); // rabbit

  let animal3 = {
    name: "Animal",
    eat() {         // animal.eat.[[HomeObject]] == animal
      alert(`${this.name} eats.`);
    }
  };
  let rabbit3 = {
    __proto__: animal3,
    name: "Rabbit",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };
  let longEar = {
    __proto__: rabbit3,
    name: "Long Ear",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };
  longEar.eat();  // Long Ear eats.

  let animal4 = {
    sayHi() {
      alert(`I'm an animal`);
    }
  };
  let rabbit4 = {
    __proto__: animal4,
    sayHi() {
      super.sayHi();
    }
  };
  let plant = {
    sayHi() {
      alert("I'm a plant");
    }
  };
  let tree = {
    __proto__: plant,
    sayHi: rabbit4.sayHi
  };
  tree.sayHi();  // I'm an animal