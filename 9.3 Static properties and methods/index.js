class User {
    static staticMethod1() {
        console.log(this === User);
    }
}
User.staticMethod2 = function () {
    console.log(this === User);
};
User.staticMethod1(); // true
User.staticMethod2(); // true

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// usage
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
console.log(articles[0].title); // CSS

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static createTodays() {
        // remember, this = Article
        return new this("Today's digest", new Date());
    }
    static publisher1 = "Ilya Kantor1"
}
let article = Article.createTodays();
console.log(article.title); // Today's digest

Article.publisher2 = "Ilya Kantor2";
console.log(Article1.publisher); // Ilya Kantor1
console.log(Article2.publisher); // Ilya Kantor2

class Animal {
    static planet = "Earth";
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.
console.log(Rabbit.planet); // Earth

console.log(Rabbit.__proto__ === Animal); // true
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true

