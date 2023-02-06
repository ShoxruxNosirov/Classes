class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    get power() {
        return this._power;
    }
    constructor(power) {
        this._power = power;
    }
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
//  coffeeMachine.power = 25; // Error (no setter)

class CoffeeMachinee {
    #waterLimit = 200;
    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }
    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}
let coffeeMachinee = new CoffeeMachinee();
//  coffeeMachinee.#fixWaterAmount(123); // Error
//  coffeeMachinee.#waterLimit = 1000; // Error

class MegaCoffeeMachine extends CoffeeMachinee {
    method() {
        //console.log( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }
}