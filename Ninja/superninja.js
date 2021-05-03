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

const ninja1 = new Ninja ()


class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Buy Doge coin!!!")
    }


}

const sensei1 = new Sensei ("Micah");
sensei1.speakWisdom();
sensei1.showStats();