class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`${this.name}, ${this.speed}, ${this.strength}, ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja ("Micah", 100);

ninja1.drinkSake();
ninja1.showStats();