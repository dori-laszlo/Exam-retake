'use strict';

// There are 3 kind of fishes:
// - Clownfish, gains 1 gramm when feeded and has stripe color.
// - Tang, gains 1 gramms when feeded and can suffer short-term memory loss.
// - Koi, gains 2 gramms when feeded.
// Each fish has a name, weight, color and has a status and feed method.
// Create an aquarium and take care of your fishes.
// Create a method on the aquarium that feeds all the fishes in the aquarium:
// increases the weight of every fish with the amount of gramms they gain when feeded.
// Create a method on the aquarium that removes the big fishes.
// A big fish's weight is at least 11 gramms.
// The aquarium has a status method it should print the status for each fish.
class Aquarium {

    fishes: Fishes[];

    constructor() {
        this.fishes = [];
    }

    add(fish: Fishes) {
        this.fishes.push(fish);
    };

    feed() {
        for (let i: number = 0; i < this.fishes.length; i++) {
            this.fishes[i].feed();
        }
    };

    removeOversizedFishes() {
        let countOversized: number = 0;
        for (let i: number = 0; i < this.fishes.length; i++) {
            if (this.fishes[i].weight >= 11) {
                countOversized++;
            }
        }
        this.fishes.sort(function (a, b) {
            return a.weight - b.weight;
        })
        for (let i: number = 0; i < this.fishes.length; i++) {
            if (this.fishes[i].weight >= 11) {
                this.fishes.splice(i, countOversized);
            }
        }
    };

    status() {
        return this.fishes.forEach((fish) => {
            fish.getStatus();
          });
    };
}

abstract class Fishes {
    name: string;
    weight: number;
    color: string;

    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }

    abstract feed();

    abstract getStatus();
}

class Clownfish extends Fishes {

    stripeColor: string;

    constructor(name: string, weight: number, color: string, stripeColor: string) {
        super(name, weight, color);
        this.stripeColor = stripeColor;
    }

    feed() {
        this.weight++;
    };

    getStatus() {
        console.log(`${this.name}, weight: ${this.weight}, color: ${this.color}, stripe color: ${this.stripeColor}`);
    };

}

class Tang extends Fishes {

    hasMemoryLoss: boolean;

    constructor(name: string, weight: number, color: string, memoryLoss: boolean) {
        super(name, weight, color);
        this.hasMemoryLoss = memoryLoss;
    }

    feed() {
        this.weight++;
    };

    getStatus() {
        console.log(`${this.name}, weight: ${this.weight}, color: ${this.color}, short-term memory loss: ${this.hasMemoryLoss}`);
    };
}

class Koi extends Fishes {

    feed() {
        this.weight += 2;
    };

    getStatus() {
        console.log(`${this.name}, weight: ${this.weight}, color: ${this.color}`);
    };
}


const aquarium: Aquarium = new Aquarium();

aquarium.add(new Koi('Nami', 9, 'pink'));
aquarium.add(new Tang('Dory', 8, 'blue', true));
aquarium.add(new Tang('Bubbles', 10, 'yellow', false));
aquarium.add(new Clownfish('Nemo', 5, 'orange', 'white'));
console.log(aquarium.status());
// Nami, weight: 9, color: pink
// Dory, weight: 8, color: blue, short-term memory loss: true
// Bubbles, weight: 10, color: yellow, short-term memory loss: false
// Nemo, weight: 5, color: orange, stripe color: white
aquarium.feed();
console.log(aquarium.status());

aquarium.removeOversizedFishes();
console.log(aquarium.status());
// Dory, weight: 9, color: blue, short-term memory loss: true
// Nemo, weight: 6, color: orange, stripe color: white