class Fighter{
    constructor(name, playerNum, percentage=0) {
        this.name = name;
        this.playerNum = playerNum;
        this.percentage = percentage;
    }

    attack(otherPlayer){
        if(otherPlayer instanceof Fighter){
            otherPlayer.percentage += 20;
        }
        else console.log("damn you trying to break the code!!");
    }
}

let mewtwo = new Fighter("mewtwo", 1, 0);
let ness = new Fighter("Ness", 2, 0);
mewtwo.attack(ness);
console.log(mewtwo);
console.log(ness);10.10