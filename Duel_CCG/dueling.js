class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack = (target) => {
        target.res -= this.power;
        if(target.res < 0){
            console.log(`${target.name} died!`)}
        }
    // attack(target) {
    //     target.res -= this.power;
    //     if(target.res < 0) {
    //         console.log(`${target.name} died!`) }
    // }
    cardInfo = () => {
        console.log(`power: ${this.power}, reslience: ${this.res}`)
    }
    // cardInfo() {
    //     console.log(`power: ${this.power}, resilience: ${this.res}`)
    // }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play = (target) => {
        if(this.stat == "resilience"){
            target.res += this.magnitude;
        }
        else{
            target.power += this.magnitude;
        }
    }

    // play(target) {
    //     if(this.stat == "resilience"){
    //         target.res += this.magnitude;
    //     }
    //     else{
    //         target.power += this.magnitude;
    //     }
    // }
}

const red_belt_ninja = new Unit ("Red Belt Ninja", 3, 3, 4);

// red_belt_ninja.attack(black_belt_ninja);
// black_belt_ninja.cardInfo();

const hard_algorithm = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);

hard_algorithm.play(red_belt_ninja);
red_belt_ninja.cardInfo();

const black_belt_ninja = new Unit ("Black Belt Ninja", 4, 5, 4);

const promise_rejection = new Effect ("Unhandled Promise Rejection", 2, "increase target's resilience by 3", "resilience", -2);
promise_rejection.play(red_belt_ninja);
red_belt_ninja.cardInfo();

const pair_programming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", +2);
pair_programming.play(red_belt_ninja);
red_belt_ninja.cardInfo();

red_belt_ninja.attack(black_belt_ninja);
black_belt_ninja.cardInfo();