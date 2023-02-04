class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
let user = new User("John");
user.sayHi();

console.log(typeof User); // function

console.log(User === User.prototype.constructor); // true 

console.log(`${User.prototype.sayHi}`); // sayHi() { console.log(this.name); }

// User(); // Error

let User1 = class MyClass {
    sayHi() {
        console.log(`${MyClass}`);  // class MyClass { sayHi() { console.log(`${MyClass}`); } }
    }
};
new User1().sayHi(); // 
// console.log(MyClass); // error


class User2 {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user2 = new User2("John");
console.log(user2.name); // John
user2 = new User2(""); // Name is too short.

class User3 {
    ['say' + 'Hi']() {
        console.log("Hello");
    }
}
new User3().sayHi();

class User4 {
    name = "John";

    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
new User4().sayHi(); // Hello, John!
let user4 = new User4();
console.log(user4.name); // John
console.log(User4.prototype.name); // undefined

class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000); // hello

