class RabbitClass { }
let rabbitClass = new RabbitClass();
console.log(rabbitClass instanceof RabbitClass); // true

function Rabbit() { }
console.log(new Rabbit() instanceof Rabbit); // true

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}
let obj = { canEat: true };
console.log(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called

class Animal0 { }
class Rabbit0 extends Animal0 { }
let rabbit0 = new Rabbit0();
console.log(rabbit0 instanceof Animal0); // true

function Rabbit1() { }
let rabbit1 = new Rabbit();
Rabbit1.prototype = {};
console.log(rabbit1 instanceof Rabbit1); // false

let user = {
    [Symbol.toStringTag]: "User"
};
console.log({}.toString.call(user)); // [object User]

console.log(window[Symbol.toStringTag]); // Window
console.log(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

console.log({}.toString.call(window)); // [object Window]
console.log({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]